import Link from 'next/link'
import { FunctionComponent } from 'react'

import { getTimeAgo } from '../../../utils/date.util'
import { Status, Ticket } from '../tickets.model'
// import Profile from '../../public/abstract-user-flat-2.svg'

import styles from './TicketPreview.module.css'

const TicketPreview: FunctionComponent<{ ticket: Ticket }> = ({ ticket }) => {
	const formatedCreatedDate = getTimeAgo(new Date(ticket.created_at * 1000))
	const formatedUpdatedDate = getTimeAgo(new Date(ticket.last_updated_date * 1000))

	let statusStyle = ''
	let iconStatusStyle = ''
	switch (ticket.status) {
		case Status.Open:
			statusStyle = styles.openStatus
			iconStatusStyle = styles.iconOpenStatus
			break
		case Status.Pending:
			statusStyle = styles.pendingStatus
			iconStatusStyle = styles.iconPendingStatus
			break
		case Status.Closed:
			statusStyle = styles.closedStatus
			iconStatusStyle = styles.iconClosedStatus
			break
		case Status.Resolved:
			statusStyle = styles.resolvedStatus
			iconStatusStyle = styles.iconResolvedStatus
			break
	}

	return (
		<div className={`${styles.ticketDiv} ${statusStyle}`}>
			<div className={styles.leftArea}>
				{/* <Profile /> */}
				<Link href={`/tickets/${ticket.id}`}>
					<a className={styles.ticketTitle}>{ticket.title}</a>
				</Link>
				<p className={styles.createdText}>
					<span className={styles.ticketAuthor}>{ticket.author}</span>{' '}
					<span className={styles.ticketDate}>
						· Created {formatedCreatedDate} {ticket.created_at !== ticket.last_updated_date && `· Last updated : ${formatedUpdatedDate} `}
					</span>
				</p>
			</div>
			<div className={styles.rightArea}>
				<p className={styles.statusParagraph}>
					Status <i className={`${iconStatusStyle} fa-solid fa-bars-staggered`}></i> <span className={styles.statusText}>{ticket.status}</span>
				</p>
				<p className={styles.priorityParagraph}>
					Priority <i className={`fa-solid fa-hourglass-empty`}></i> <span className={styles.priorityText}>{ticket.priority}</span>
				</p>
				<p className={styles.answersParagraph}>
					{ticket.answers.length} {ticket.answers.length === 1 ? 'Answer' : 'Answers'}
				</p>
			</div>
		</div>
	)
}

export default TicketPreview
