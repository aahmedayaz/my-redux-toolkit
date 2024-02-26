import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personArray: []
}

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addToSelectedPerson: (state, action) => {
            // state.personArray = [...state.personArray, action.payload]
            state.personArray.push(action.payload) 

            // Both ways are correct
        }
    }
})

export const {addToSelectedPerson} = personSlice.actions
export default personSlice.reducer