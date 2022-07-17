import { NextPage } from "next";

import TicketsDashboard from "../../components/Tickets/Dashboard/TicketsDashboard";
import SideNav from "../../components/Tickets/SideNav/SideNav";

const Dashboard: NextPage = () => {

    return(
        <div className='wrapper'>
			<SideNav />
			<TicketsDashboard />
		</div>
    )
}

export default Dashboard