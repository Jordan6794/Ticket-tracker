import Link from 'next/link'

import { useAppSelector } from '../../hooks'
import { logout } from '../../lib/firebase.service'

import styles from './Nav.module.css'

export default function Nav() {
	const user = useAppSelector((state) => state.auth)

	function handleLogout() {
		logout()
	}

	return (
		<div className={styles.nav}>
			<div className={styles.logoDiv}>
				<h3>Team Ticket</h3>
			</div>
			<ul className={styles.linkList}>
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
