import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'
import ticketsReducer from './tickets'
import sortByReducer from './sortBy'



const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		counter: counterReducer,
        auth: authReducer,
		sortBy: sortByReducer
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch