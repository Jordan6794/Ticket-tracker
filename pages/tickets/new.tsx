import { NextPage } from "next";

import SideNav from "../../components/Tickets/SideNav/SideNav";
import NewTicketForm from "../../components/Tickets/NewTicketForm";

const NewTicket: NextPage = () => {
    return (
        <div className='wrapper'>
			<SideNav />
			<NewTicketForm />
		</div>
    )
}

export default NewTicket