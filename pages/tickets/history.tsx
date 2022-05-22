import { NextPage } from "next";

import TicketsHistory from "../../components/Tickets/TicketsHistory";
import TicketsNav from "../../components/Tickets/TicketsNav";

import styles from '../../styles/tickets.module.css'

const History : NextPage = () => {

    return(
        <div className={styles.ticketsDiv}>
			<TicketsNav />
			<TicketsHistory />
		</div>
    )
}

export default History