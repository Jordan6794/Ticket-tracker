import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTicketsFromDatabase } from "../../lib/firebase.service";

import { ticketsActions } from "../../store/tickets";
import { serializeTicket } from "../../utils/serialize.util";
import { sortTickets } from "../../utils/sortTickets.util";
import Filter from "./Filter/Filter";

import NewTicketForm from "./NewTicketForm";
import TicketPreview from "./TicketPreview";
import { Ticket } from "./tickets.model";

import styles from './TicketsFeed.module.css'


const TicketsFeed: FunctionComponent = () => {
    const [sortedTickets, setSortedTickets] = useState<Ticket[]>([])
    const tickets = useAppSelector(state => state.tickets)
    const dispatch = useAppDispatch()
    const router = useRouter()

    //? router.isReady ? Un peu yologuessing ici mais should be totally good
    useEffect(() => {
        const fetchTickets2 = async() => {
                const tickets = await getTicketsFromDatabase()
                const serializedTickets = tickets.map(ticket => serializeTicket(ticket))
                dispatch(ticketsActions.setTickets(serializedTickets))
        }
        fetchTickets2()
    }, [dispatch])

    useEffect(() => {
        if(router.isReady && tickets.length > 0){
            if(router.query.orderBy && !Array.isArray(router.query.orderBy)){
                setSortedTickets(sortTickets(tickets, router.query.orderBy))
            } else {
                setSortedTickets(tickets)
            }
        }
    },[tickets, router.query.orderBy, router.isReady])

    const ticketsDisplay = sortedTickets.map(ticketItem => <TicketPreview key={ticketItem.id} ticket={ticketItem} />)

    return(
        <div className={styles.feedDiv}>
            <Filter />
            <NewTicketForm />
            {ticketsDisplay}
        </div>
    )
}

export default TicketsFeed