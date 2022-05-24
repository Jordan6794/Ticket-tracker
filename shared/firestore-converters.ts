import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore/lite";
import { Ticket } from "../components/Tickets/tickets.model";



export const ticketConverter: FirestoreDataConverter<Ticket> = {
    toFirestore(ticket: WithFieldValue<Ticket>): DocumentData{
        return ticket
    },

    fromFirestore(snapshot: QueryDocumentSnapshot): Ticket{
        //? le ! est quoi exactement btw ? même que pour les input = promet que pas undefined ?
        const data = snapshot.data()!
		return data as Ticket
    }
}

//? no more options for snapshot.data() ???
// SnapshotOptions type not in firebase/firestore/lite
// snapshot.data(options)! expected 0 params but got 1
// fromFirestore hover : only 1 param
// Typescript FirestoreDataConverter example missing options in params too lol (can see on hover FirestoreDataConverter)
//! mais options still present dans la (outdated?) doc : https://firebase.google.com/docs/reference/js/firestore_.firestoredataconverter