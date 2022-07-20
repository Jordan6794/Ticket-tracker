import { TicketChanges } from "../tickets.model"

export interface History {
    ticket_title: string
	update_time: number
    change: HistoryChange
    ticket_id?: string
}

export interface HistoryChange {
    change_type: ChangeType
    author: string
    changes?: TicketChanges
}

export enum ChangeType {
    New = 'New Ticket',
	Reply = 'Reply',
	Update = 'Update',
	Delete = 'Delete',
}