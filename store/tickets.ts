import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Ticket, Answer, TicketChanges } from "../components/Tickets/tickets.model"
import { History, HistoryChange, ChangeType } from "../components/Tickets/History/history.model"


const initialTicketState: {tickets: Ticket[], history: History[]} = {tickets: [], history: []}

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: initialTicketState,
    reducers: {
        add(state, action: PayloadAction<Ticket>){
            const newTicket = action.payload
            // unshift rather than push so they get display on top of the page when maping through the array
            state.tickets.unshift(newTicket)

            //updating history array
            const change: HistoryChange = {
                change_type: ChangeType.New,
                author: newTicket.author
            }
            const history: History = {
                ticket_title: newTicket.title,
                update_time: newTicket.last_updated_date,
                change
            }
            state.history.unshift(history)
        },
        setTickets(state, action: PayloadAction<Ticket[]>){
            state.tickets = action.payload
        },
        addReply(state, action: PayloadAction<{id: string, answer: Answer}>){
            const ticketIndex = state.tickets.findIndex(ticket => ticket.id === action.payload.id)
            state.tickets[ticketIndex].answers.push(action.payload.answer)
            state.tickets[ticketIndex].last_updated_date = action.payload.answer.date

            //updating history array
            const change: HistoryChange = {
                change_type: ChangeType.Reply,
                author: action.payload.answer.author
            }

            const ticket_title = state.tickets.find(ticket => ticket.id === action.payload.id)!.title
            const history: History = {
                ticket_title,
                update_time: action.payload.answer.date,
                change
            }
            state.history.unshift(history)
        },
        updateTicket(state, action:PayloadAction<{id: string, changes: TicketChanges, author: string}>){
            const ticketIndex = state.tickets.findIndex(ticket => ticket.id === action.payload.id)
            state.tickets[ticketIndex] = {...state.tickets[ticketIndex], ...action.payload.changes}

            //updating history array
            const change: HistoryChange = {
                change_type: ChangeType.Update,
                changes: action.payload.changes,
                author: action.payload.author
            }

            const ticket_title = state.tickets.find(ticket => ticket.id === action.payload.id)!.title
            const history: History = {
                ticket_title,
                update_time: action.payload.changes.last_updated_date,
                change
            }
            state.history.unshift(history)
        },
        deleteTicket(state, action: PayloadAction<{id: string, deleteTime: number, deleter: string}>){
            const ticket_title = state.tickets.find(ticket => ticket.id === action.payload.id)!.title
            state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload.id)

            //updating history array
            const change: HistoryChange = {
                change_type: ChangeType.Delete,
                author: action.payload.deleter
            }
            const history: History = {
                ticket_title,
                update_time: action.payload.deleteTime,
                change
            }
            state.history.unshift(history)
        }
    }
})

export default ticketsSlice.reducer

export const ticketsActions = ticketsSlice.actions