
import { Ticket, TicketRAW } from "../components/Tickets/tickets.model";


export function serializeTicket(ticket: TicketRAW): Ticket{
    const created_at = ticket.created_at.seconds
    const last_updated_date = ticket.last_updated_date.seconds

    return {...ticket, created_at, last_updated_date }
}
