export interface Ticket {
	title: string
    author: string
    message: string
    id: string
	dateCreated: string
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

interface Answer {
    author: string
    date: string
    post: string
}