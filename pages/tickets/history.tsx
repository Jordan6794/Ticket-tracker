import { NextPage } from "next";

import TicketsHistory from "../../components/Tickets/TicketsHistory";
import SideNav from "../../components/Tickets/SideNav/SideNav";

const History : NextPage = () => {

    return(
        <div className='wrapper'>
			<SideNav />
			<TicketsHistory />
		</div>
    )
}

export default History