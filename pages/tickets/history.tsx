import { NextPage } from "next";

import TicketsHistory from "../../components/Tickets/History/TicketsHistory";
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