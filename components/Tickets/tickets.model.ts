import { Timestamp } from "firebase/firestore/lite"

export interface Ticket {
	title: string
    author: string
    message: string
    id: string
	created_at: number 
	last_updated_date: number
	priority: Priority 
	status: Status
    answers: Array<Answer>
}

export interface TicketRAW {
	title: string
    author: string
    message: string
    id: string
	created_at: Timestamp 
	last_updated_date: Timestamp 
	priority: Priority 
	status: Status
    answers: Array<AnswerRAW>
}

export enum Priority {
	Low = 'Low',
	Medium = 'Medium',
	High = 'High',
	Urgent = 'Urgent',
}

export enum Status {
	Open = 'Open',
	Pending = 'Pending',
	Resolved = 'Resolved',
	Closed = 'Closed',
}

export interface AnswerRAW {
    author: string
    date: Timestamp
    post: string
}

export interface Answer {
    author: string
    date: number
    post: string
}