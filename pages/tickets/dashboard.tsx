import { NextPage } from "next";

import TicketsDashboard from "../../components/Tickets/TicketsDashboard";
import TicketsNav from "../../components/Tickets/Nav/TicketsNav";

import styles from '../../styles/tickets.module.css'


const Dashboard: NextPage = () => {

    return(
        <div className={styles.ticketsDiv}>
			<TicketsNav />
			<TicketsDashboard />
		</div>
    )
}

export default Dashboard