import Link from 'next/link'
import { FunctionComponent } from 'react'

import { getTimeAgo } from '../../utils/date.util'
import { ticketsI } from './tickets.model'

import styles from './TicketPreview.module.css'

const TicketPreview: FunctionComponent<{ ticket: ticketsI }> = ({ ticket }) => {

	const formatedDate = getTimeAgo(ticket.dateCreated)

	return (
		<div className='ticket-div'>
			<h3 className={styles.ticketTitle}><Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link></h3>
			<p>One ticket item {ticket.message}</p>
            <p>Created by {ticket.author} {formatedDate}</p>
			<p>Status {ticket.status} priority {ticket.priority}</p>
		</div>
	)
}

export default TicketPreview
