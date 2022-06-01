import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { getTicket } from "../../lib/firebase.service";
import { getTimeAgo } from "../../utils/date.util";
import { serializeTicket } from "../../utils/serialize.util";
import ReplyForm from "./ReplyForm";
import { Ticket } from "./tickets.model";


const TicketDetails: FunctionComponent = () => {
    const [ticket, setTicket] = useState<Ticket | null>(null)
    const [reply, setReply] = useState(false)
    const router = useRouter()
    const ticketId = router.query.id

    useEffect(() => {
        async function fetchTicket(){
            if(ticketId!== undefined && !Array.isArray(ticketId)){
                const result = await getTicket(ticketId)
                if(result){
                    setTicket(serializeTicket(result))
                }
            }
        }
    
        if(router.isReady){
            fetchTicket()
        }

    }, [router.isReady, ticketId])

    function toggleReply(){
        setReply(prev => !prev)
    }

    function submitReply(reply: string){
        console.log('submit inside details : ', reply)
    }

    
    return(
        <div className="ticket-details">
            <p>details id : {ticketId}</p>
            {ticket && 
            <div>
                <h4>{ticket.title}</h4>
                <p>{ticket.message}</p>
                <p>{ticket.author}</p>
                <p>{getTimeAgo(new Date(ticket.created_at * 1000))}</p>
                </div>}
                <button type='button' onClick={toggleReply}>Reply</button>
                {reply && <ReplyForm submit={submitReply} toggle={toggleReply}/>}
        </div>
    )
}

export default TicketDetails