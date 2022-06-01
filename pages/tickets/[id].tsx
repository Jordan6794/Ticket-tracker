import { NextPage } from "next";

import TicketsNav from "../../components/Tickets/Nav/TicketsNav";
import TicketDetails from "../../components/Tickets/TicketDetails";

import styles from '../../styles/tickets.module.css'


const TicketDetailPage: NextPage = () => {

    return (
        <div className={styles.ticketsDiv}>
			<TicketsNav />
			<TicketDetails />
		</div>
    )
}

export default TicketDetailPage