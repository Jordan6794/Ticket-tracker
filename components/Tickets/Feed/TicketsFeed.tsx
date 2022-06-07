import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getTicketsFromDatabase } from '../../../lib/firebase.service'

import { ticketsActions } from '../../../store/tickets'
import { serializeTicket } from '../../../utils/serialize.util'
import { sortTickets } from '../../../utils/sortTickets.util'
import Filter from '../Filter/Filter'

import TicketPreview from './TicketPreview'
import { Ticket } from './../tickets.model'

import styles from './TicketsFeed.module.css'

const TicketsFeed: FunctionComponent = () => {
	const [sortedTickets, setSortedTickets] = useState<Ticket[]>([])
	const tickets = useAppSelector((state) => state.tickets)
	const dispatch = useAppDispatch()
	const router = useRouter()

	//! need to fetch et set mon state somewhere else ? Normal de juste le faire on top level ?
	useEffect(() => {
		const fetchTickets = async () => {
			const tickets = await getTicketsFromDatabase()
			const serializedTickets = tickets.map((ticket) => serializeTicket(ticket))
			dispatch(ticketsActions.setTickets(serializedTickets))
		}
		fetchTickets()
	}, [dispatch])

	useEffect(() => {
		if (!router.isReady) return
		if (tickets.length > 0) {
			if (router.query.orderBy && !Array.isArray(router.query.orderBy)) {
				setSortedTickets(sortTickets(tickets, router.query.orderBy))
			} else {
				setSortedTickets(tickets)
			}
		}
	}, [tickets, router.query.orderBy, router.isReady])

	const ticketsDisplay = sortedTickets.map((ticketItem) => <TicketPreview key={ticketItem.id} ticket={ticketItem} />)

	return (
		<div className='content-div'>
				<div className={styles.topBarBackground}>
                    <div className='container'>
                        <div className={styles.topBar}>
                            <Filter />
                            <Link href="/tickets/new">
                                <button type="button" className={`btn btn-primary btn-small ${styles.newTicketBtn}`}>
                                    New Ticket
                                </button>
                            </Link>
                        </div>
                    </div>
				</div>
			<div className='container'>
				{ticketsDisplay}
			</div>
		</div>
	)
}

export default TicketsFeed
