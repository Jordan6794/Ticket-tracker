import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Ticket, Answer, TicketChanges } from "../components/Tickets/tickets.model"


const initialTicketState: Ticket[] = []

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: initialTicketState,
    reducers: {
        add(state, action: PayloadAction<Ticket>){
            // unshift rather than push so they get display on top of the page when maping through the array
            state.unshift(action.payload)
        },
        addMultiple(state, action: PayloadAction<Ticket[]>){
            const tickets = action.payload
            tickets.forEach(ticket => {
                state.unshift(ticket)
            })
        },
        setTickets(state, action: PayloadAction<Ticket[]>){
            return action.payload
        },
        addReply(state, action: PayloadAction<{id: string, answer: Answer}>){
            const ticketIndex = state.findIndex(ticket => ticket.id === action.payload.id)
            state[ticketIndex].answers.push(action.payload.answer)
            state[ticketIndex].last_updated_date = action.payload.answer.date
        },
        updateTicket(state, action:PayloadAction<{id: string, changes: TicketChanges}>){
            const ticketIndex = state.findIndex(ticket => ticket.id === action.payload.id)
            state[ticketIndex] = {...state[ticketIndex], ...action.payload.changes}
        },
        deleteTicket(state, action: PayloadAction<string>){
            return state.filter(ticket => ticket.id !== action.payload)
        }
    }
})

export default ticketsSlice.reducer

export const ticketsActions = ticketsSlice.actions