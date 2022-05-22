import Link from 'next/link'
import { FunctionComponent } from 'react'

import styles from './TicketsNav.module.css'

const TicketsNav: FunctionComponent = () => {
	return (
		<div className={styles.navDiv}>
			<ul>
				<li>
					<Link href="/tickets/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link href="/tickets/feed">Feed</Link>
				</li>
				<li>
					<Link href="/tickets/history">History</Link>
				</li>
			</ul>
		</div>
	)
}

export default TicketsNav
