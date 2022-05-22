import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { count: 0, show: true }

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		},
		increase(state, action) {
			state.count += action.payload
		},
	},
})

export default counterSlice.reducer

export const counterActions = counterSlice.actions