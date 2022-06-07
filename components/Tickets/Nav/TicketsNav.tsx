import Link from 'next/link'
import { FunctionComponent } from 'react'
import PieLogo from '../../../public/category.svg'
import ArticlesLogo from '../../../public/articles.svg';
import HistoryLogo from '../../../public/history-line.svg'

import { QUERY_CREATED_AT, QUERY_ORDER_BY } from '../../../utils/consts'

import styles from './TicketsNav.module.css'

const TicketsNav: FunctionComponent = () => {
	return (
		<div className={styles.navDiv}>
			<ul>
				<li className={styles.navItem}>
					<Link href="/tickets/dashboard">
						<div>
						<PieLogo className={styles.navIcon} width={30} height={30}/>
						<span className={styles.tooltipText}>Dashboard</span>
					</div>
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link href={`/tickets/feed?${QUERY_ORDER_BY}=${QUERY_CREATED_AT}`}>
						<div>
							<ArticlesLogo className={styles.navIcon} width={30} height={30}/>
							<span className={styles.tooltipText}>Tickets</span>
						</div>
						</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/tickets/history">
						<div>
							<HistoryLogo className={styles.navIcon} width={30} height={30}/>
							<span className={styles.tooltipText}>History</span>
						</div>
						</Link>
				</li>
			</ul>
		</div>
	)
}

export default TicketsNav
