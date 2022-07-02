import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'

import { useAppSelector } from '../../../hooks'

import { sortTickets } from '../../../utils/sortTickets.util'
import Filter from '../Filter/Filter'

import TicketPreview from './TicketPreview'
import { Ticket } from './../tickets.model'

import styles from './TicketsFeed.module.css'

const TicketsFeed: FunctionComponent = () => {
	const [sortedTickets, setSortedTickets] = useState<Ticket[]>([])
	const tickets = useAppSelector((state) => state.tickets)
	const router = useRouter()

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
