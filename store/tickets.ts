import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Ticket } from "../components/Tickets/tickets.model"


const initialTicketState: Ticket[] = []

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: initialTicketState,
    reducers: {
        add(state, action: PayloadAction<Ticket>){
            state.push(action.payload)
        },
        addMultiple(state, action: PayloadAction<Ticket[]>){
            const tickets = action.payload
            tickets.forEach(ticket => {
                state.push(ticket)
            })
        },
        setTickets(state, action: PayloadAction<Ticket[]>){
            return action.payload
        }
    }
})

export default ticketsSlice.reducer

export const ticketsActions = ticketsSlice.actions