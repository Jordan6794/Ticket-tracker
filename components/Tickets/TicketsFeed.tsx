import { FunctionComponent, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTicketsFromDatabase } from "../../lib/firebase.service";
import { ticketsActions } from "../../store/tickets";

import NewTicketForm from "./NewTicketForm";
import TicketPreview from "./TicketPreview";

import styles from './TicketsFeed.module.css'


const TicketsFeed: FunctionComponent = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        const fetchTickets = async () => {

            const tickets = await getTicketsFromDatabase()
            console.log('tickets from feed effect : ', tickets)
            dispatch(ticketsActions.setTickets(tickets))
        }
        fetchTickets()
    }, [dispatch])
    
    const tickets = useAppSelector(state => state.tickets)
    console.log('tickets from ticketsfeed : ', tickets)

    const ticketsDisplay = tickets.map(ticketItem => <TicketPreview key={ticketItem.id} ticket={ticketItem} />)

    return(
        <div className={styles.feedDiv}>
            <NewTicketForm />
            {/* {ticketsDisplay} */}
        </div>
    )
}

export default TicketsFeed