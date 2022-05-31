import Link from 'next/link'
import { FunctionComponent } from 'react'

import { QUERY_CREATED_AT, QUERY_ORDER_BY } from '../../shared/consts'

import styles from './TicketsNav.module.css'

const TicketsNav: FunctionComponent = () => {
	return (
		<div className={styles.navDiv}>
			<ul>
				<li>
					<Link href="/tickets/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link href={`/tickets/feed?${QUERY_ORDER_BY}=${QUERY_CREATED_AT}`}>Feed</Link>
				</li>
				<li>
					<Link href="/tickets/history">History</Link>
				</li>
			</ul>
		</div>
	)
}

export default TicketsNav
