import { FunctionComponent } from "react";

import { useAppSelector } from "../../hooks";
import NewTicketForm from "./NewTicketForm";
import TicketPreview from "./TicketPreview";

import styles from './TicketsFeed.module.css'


const TicketsFeed: FunctionComponent = () => {
    const tickets = useAppSelector(state => state.tickets)
    console.log(tickets)

    const ticketsDisplay = tickets.map(ticketItem => <TicketPreview key={ticketItem.id} ticket={ticketItem} />)

    return(
        <div className={styles.feedDiv}>
            <NewTicketForm />
            {ticketsDisplay}
        </div>
    )
}

export default TicketsFeed