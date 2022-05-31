import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { auth, logout } from '../../lib/firebase.service'
import { QUERY_CREATED_AT, QUERY_ORDER_BY } from '../../shared/consts'
import { authActions } from '../../store/auth'

import styles from './Nav.module.css'

export default function Nav() {
	const user = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const userInfos = { username: user.displayName, id: user.uid }
				dispatch(authActions.login(userInfos))
			} else {
				dispatch(authActions.logout())
			}
		})
	}, [dispatch])

	function handleLogout() {
		logout()
	}

	return (
		<div className={styles.nav}>
			<ul className={styles.linkList}>
				<li>
					<Link href={`/tickets/feed?${QUERY_ORDER_BY}=${QUERY_CREATED_AT}`}>Tickets</Link>
				</li>
				<li>
					<Link href="/">Home page</Link>
				</li>
				{!user.id && (
					<li>
						<Link href="/auth">Login</Link>
					</li>
				)}
				{user.id && <li onClick={handleLogout}>Logout</li>}
				{user.id && <li>{user.username}</li>}
			</ul>
		</div>
	)
}
