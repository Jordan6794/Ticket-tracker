import { NextPage } from "next";

import SideNav from "../../components/Tickets/SideNav/SideNav";
import TicketDetails from "../../components/Tickets/Details/TicketDetails";

const TicketDetailPage: NextPage = () => {

    return (
        <div className='wrapper'>
			<SideNav />
			<TicketDetails />
		</div>
    )
}

export default TicketDetailPage