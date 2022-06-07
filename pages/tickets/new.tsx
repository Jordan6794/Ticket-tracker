import { NextPage } from "next";

import TicketsNav from "../../components/Tickets/Nav/TicketsNav";
import NewTicketForm from "../../components/Tickets/NewTicketForm";
import styles from '../../styles/tickets.module.css'

const NewTicket: NextPage = () => {
    return (
        <div className={styles.ticketsDiv}>
			<TicketsNav />
			<NewTicketForm />
		</div>
    )
}

export default NewTicket