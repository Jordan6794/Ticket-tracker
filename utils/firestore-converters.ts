import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore/lite";
import { TicketRAW } from "../components/Tickets/tickets.model";



export const ticketConverter: FirestoreDataConverter<TicketRAW> = {
    toFirestore(ticket: WithFieldValue<TicketRAW>): DocumentData{
        return ticket
    },

    fromFirestore(snapshot: QueryDocumentSnapshot): TicketRAW{
        const data = snapshot.data()!
		return data as TicketRAW
    }
}