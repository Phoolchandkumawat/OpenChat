import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    user:[]
}


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload)
        }
    }
})

export const {addUser} = chatSlice.actions

export default chatSlice.reducer