import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

import { QUERY_CREATED_AT, QUERY_ORDER_BY } from '../../../utils/consts'

import Dashboard from '../../../public/leaderboardF.svg'
import Tickets from '../../../public/storage.svg'
import HistoryLogo from '../../../public/history.svg'

import styles from './SideNav.module.css'

const SideNav: FunctionComponent = () => {
	const router = useRouter()

	return (
		<div className={styles.navDiv}>
			<ul>
				<div className={styles.devider}></div>
				<Link href="/tickets/dashboard">
					<li className={`${styles.navItem} ${router.pathname === '/tickets/dashboard' ? `${styles.active}` : ''}`}>
						<div className={`${styles.navElement} `}>
							<Dashboard className={styles.navIcon} />
							<span className={styles.navText}>Dashboard</span>
						</div>
					</li>
				</Link>

				<div className={styles.devider}></div>
				<Link href={`/tickets/feed?${QUERY_ORDER_BY}=${QUERY_CREATED_AT}`}>
					<li className={`${styles.navItem} ${router.pathname === '/tickets/feed' ? `${styles.active}` : ''}`}>
						<div className={`${styles.navElement}`}>
							<Tickets className={styles.navIcon} />
							<span className={styles.navText}>Tickets</span>
						</div>
					</li>
				</Link>
				<div className={styles.devider}></div>
				<Link href="/tickets/history">
					<li className={`${styles.navItem} ${router.pathname === '/tickets/history' ? `${styles.active}` : ''}`}>
						<div className={`${styles.navElement}`}>
							<HistoryLogo className={styles.navIcon} />
							<span className={styles.navText}>History</span>
						</div>
					</li>
				</Link>
				<div className={styles.devider}></div>
			</ul>
		</div>
	)
}

export default SideNav
