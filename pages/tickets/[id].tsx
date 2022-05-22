import { NextPage } from "next";
import { useRouter } from "next/router";

import TicketsNav from "../../components/Tickets/TicketsNav";

import styles from '../../styles/tickets.module.css'


const TicketDetailPage: NextPage = () => {
    const router = useRouter()

    const ticketId = router.query.id

    return (
        <div className={styles.ticketsDiv}>
			<TicketsNav />
			<p>ticket number {ticketId}</p>
		</div>
    )
}

export default TicketDetailPage