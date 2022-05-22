import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'
import ticketsReducer from './tickets'



const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		counter: counterReducer,
        auth: authReducer
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
