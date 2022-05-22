import { createSlice } from "@reduxjs/toolkit"


const initialAuthState = false

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			return true
		},
		logout(state) {
			return false
		},
	},
})

export default authSlice.reducer
export const authActions = authSlice.actions