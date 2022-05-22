import { createSlice } from "@reduxjs/toolkit"
import { ticketsI } from "../components/Tickets/tickets.model"


const initialTicketState: ticketsI[] = []

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: initialTicketState,
    reducers: {
        add(state, action){
            state.push(action.payload)
        }
    }
})

export default ticketsSlice.reducer

export const ticketsActions = ticketsSlice.actions