import { NextPage } from 'next'

import TicketsFeed from '../../components/Tickets/TicketsFeed'
import TicketsNav from '../../components/Tickets/TicketsNav'

import styles from '../../styles/tickets.module.css'

const Tickets: NextPage = () => {
	return (
		<div className={styles.ticketsDiv}>
			<TicketsNav />
			<TicketsFeed />
		</div>
	)
}

export default Tickets