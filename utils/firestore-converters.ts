import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore/lite";
import { Ticket } from "../components/Tickets/tickets.model";


//? Useless to convert numbers/Timestamp because updateDoc does not call covnerter, which makes everything crumble
//? => So we put Timestamp in numbers in DB too and drop conversions
export const ticketConverter: FirestoreDataConverter<Ticket> = {
    toFirestore(ticket: WithFieldValue<Ticket>): DocumentData{
        return ticket
    },

    fromFirestore(snapshot: QueryDocumentSnapshot): Ticket{
        const data = snapshot.data()!
		return data as Ticket
    }
}