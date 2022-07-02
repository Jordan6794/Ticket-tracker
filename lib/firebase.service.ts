// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth'
import {
	getFirestore,
	collection,
	getDocs,
	setDoc,
	doc,
	getDoc,
	updateDoc,
	arrayUnion,
	deleteDoc,
} from 'firebase/firestore/lite'

import { Answer, Ticket, TicketChanges } from '../components/Tickets/tickets.model'
import { ticketConverter } from '../utils/firestore-converters'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: 'bug-tracker-afb83',
	storageBucket: 'bug-tracker-afb83.appspot.com',
	messagingSenderId: '12797198198',
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: 'G-24XB66C4ED',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
// const analytics = getAnalytics(app);

const ticketsCollec = collection(db, 'tickets').withConverter(ticketConverter)

//=== Tickets functions
//? name fromDatabase redondant ici ou good ?
export async function getTicketsFromDatabase() {	
	const querySnapshot = await getDocs(ticketsCollec)
	const result = querySnapshot.docs.map((doc) => doc.data())
	return result
}

export async function getTicket(id: string){
	const docSnap = await getDoc(doc(ticketsCollec, id))
	if(docSnap.exists()){
		return docSnap.data()
	} else {
		return null
	}
}

export async function postTicket(ticket: Ticket) {
	await setDoc(doc(ticketsCollec, ticket.id), ticket)
}

export async function addAnswerToTicket(id: string, answer: Answer){
	const ticketRef = doc(ticketsCollec, id)
	await updateDoc(ticketRef, {
		answers: arrayUnion(answer),
		last_updated_date: answer.date
	})
}

export async function updateTicket(id: string, changes: TicketChanges){
	const ticketRef = doc(ticketsCollec, id)
	await updateDoc(ticketRef, changes)
}

export async function deleteTicket(id: string){
	const ticketRef = doc(ticketsCollec, id)
	await deleteDoc(ticketRef)
}


//===Auth functions
//? comment gerer le return quand fail en returnant une falsy value + error info (pour manage l'UX en fonction de l'error) ?
export async function signUpUserWithUsername(
	email: string,
	password: string,
	username: string
) {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)
		const user = userCredential.user

		try {
			await updateProfile(user, {
				displayName: username,
			})
		} catch (error: any) {
			console.log(error.message)
		}

		return user
	} catch (error: any) {
		console.log(error.message)
		return null
	}
}

export async function signInUser(email: string, password: string) {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		)
		const user = userCredential.user

		return user
	} catch (error: any) {
		console.log(error.message)
		return null
	}
}

export async function logout() {
	try {
		signOut(auth)
	} catch (error) {
		console.log(error)
	}
}

export { auth }
