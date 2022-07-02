import { createSlice } from "@reduxjs/toolkit"


const initialDropdownState = false

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: initialDropdownState,
    reducers: {
        toggle(state){
            return !state
        }
    }
})

export default dropdownSlice.reducer
export const dropdownActions = dropdownSlice.actions