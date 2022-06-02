import Link from 'next/link'
import { FunctionComponent } from 'react'

import { getTimeAgo } from '../../utils/date.util'
import { Ticket } from './tickets.model'

import styles from './TicketPreview.module.css'

const TicketPreview: FunctionComponent<{ ticket: Ticket }> = ({ ticket }) => {

	const formatedCreatedDate = getTimeAgo(new Date(ticket.created_at * 1000))
	const formatedUpdatedDate = getTimeAgo(new Date(ticket.last_updated_date * 1000))

	return (
		<div className='ticket-div'>
			<Link href={`/tickets/${ticket.id}`}><a className={styles.ticketTitle}>{ticket.title}</a></Link>
			<p>message : {ticket.message}</p>
            <p>Created by {ticket.author} {formatedCreatedDate}</p>
			{ticket.created_at !== ticket.last_updated_date && <p>Last updated : {formatedUpdatedDate}</p>}
			<p>Status {ticket.status} priority {ticket.priority}</p>
		</div>
	)
}

export default TicketPreview
