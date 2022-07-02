
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

export interface TicketChanges {
	priority?: Priority
	status?: Status
	last_updated_date: number
}

export interface Answer {
	author: string
    date: number
    post: string
}