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
	query,
	orderBy,
} from 'firebase/firestore/lite'
import { ticketConverter } from '../shared/firestore-converters'
import { TicketRAW } from '../components/Tickets/tickets.model'

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

const ticketsCollec = collection(db, 'tickets').withConverter(
	ticketConverter
)

//? name fromDatabase redondant ici ou good ?
export async function getTicketsFromDatabase() {
	
	const querySnapshot = await getDocs(ticketsCollec)
	const result = querySnapshot.docs.map((doc) => doc.data())
	return result
}

//? obv way better to have one funct with query param ? Mais chiant parce que component less dumb knowing the query ?
export async function getTicketsOrderedByQuery(orderedBy: string) {
	const q = query(ticketsCollec, orderBy(orderedBy, 'desc'))
	const querySnapshot = await getDocs(q)
	const result = querySnapshot.docs.map((doc) => doc.data())
	return result
}
export async function getTicketsOrderByLastUpdated() {
	const q = query(ticketsCollec, orderBy('last_updated_date', 'desc'))
	const querySnapshot = await getDocs(q)
	const result = querySnapshot.docs.map((doc) => doc.data())
	return result
}
export async function getTicketsOrderByStatus() {
	const q = query(ticketsCollec, orderBy('last_updated_date', 'desc'))
	const querySnapshot = await getDocs(q)
	const result = querySnapshot.docs.map((doc) => doc.data())
	return result
}
export async function getTicketsOrderByPriority() {
	const q = query(ticketsCollec, orderBy('last_updated_date', 'desc'))
	const querySnapshot = await getDocs(q)
	const result = querySnapshot.docs.map((doc) => doc.data())
	return result
}

export async function postTicket(ticket: TicketRAW) {
	const ticketsCollec = collection(db, 'tickets').withConverter(
		ticketConverter
	)
	await setDoc(doc(ticketsCollec, ticket.id), ticket)
}

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
