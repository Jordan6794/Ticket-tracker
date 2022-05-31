import Link from 'next/link'
import { FunctionComponent } from 'react'

import { getTimeAgo } from '../../utils/date.util'
import { Ticket } from './tickets.model'

import styles from './TicketPreview.module.css'

const TicketPreview: FunctionComponent<{ ticket: Ticket }> = ({ ticket }) => {

	const formatedDate = getTimeAgo(new Date(ticket.created_at * 1000))

	return (
		<div className='ticket-div'>
			<Link href={`/tickets/${ticket.id}`}><a className={styles.ticketTitle}>{ticket.title}</a></Link>
			<p>message : {ticket.message}</p>
            <p>Created by {ticket.author} {formatedDate}</p>
			<p>Status {ticket.status} priority {ticket.priority}</p>
		</div>
	)
}

export default TicketPreview
