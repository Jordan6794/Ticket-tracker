import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTicketsFromDatabase, getTicketsOrderedByQuery } from "../../lib/firebase.service";

import { ticketsActions } from "../../store/tickets";
import { serializeTicket } from "../../utils/serialize.util";
import Filter from "./Filter/Filter";

import NewTicketForm from "./NewTicketForm";
import TicketPreview from "./TicketPreview";

import styles from './TicketsFeed.module.css'


const TicketsFeed: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()


    //? est-ce que je refetch en utilisant le sort de firebase ou better de fetch once et order myself ?
    //? router.isReady ? Un peu yologuessing ici mais should be totally good
    useEffect(() => {
        const fetchTickets = async () => {
            if(router.isReady){
                if(router.query.orderBy && !Array.isArray(router.query.orderBy)){
                    const tickets = await getTicketsOrderedByQuery(router.query.orderBy)
                    const serializedTickets = tickets.map(ticket => serializeTicket(ticket))
                    dispatch(ticketsActions.setTickets(serializedTickets))
                }
                else {
                    const tickets = await getTicketsFromDatabase()
                    const serializedTickets = tickets.map(ticket => serializeTicket(ticket))
                    dispatch(ticketsActions.setTickets(serializedTickets))
                }
            }
        }
        fetchTickets()
    }, [dispatch, router.query.orderBy, router.isReady])

    
    const tickets = useAppSelector(state => state.tickets)

    const ticketsDisplay = tickets.map(ticketItem => <TicketPreview key={ticketItem.id} ticket={ticketItem} />)

    return(
        <div className={styles.feedDiv}>
            <Filter />
            <NewTicketForm />
            {ticketsDisplay}
        </div>
    )
}

export default TicketsFeed