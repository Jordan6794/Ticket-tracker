import { FunctionComponent, useEffect } from "react";

import { useAppDispatch } from "../../hooks";
import { getTicketsFromDatabase } from "../../lib/firebase.service";
import { ticketsActions } from "../../store/tickets";

const FetchWrapper: FunctionComponent<{ children: JSX.Element[] | JSX.Element }> = (props) =>{
    const dispatch = useAppDispatch()

	useEffect(() => {
		const fetchTickets = async () => {
			const tickets = await getTicketsFromDatabase()
			dispatch(ticketsActions.setTickets(tickets))
		}
		fetchTickets()
	}, [dispatch])
    
    return <>{props.children}</>
}

export default FetchWrapper