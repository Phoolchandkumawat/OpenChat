import {configureStore} from '@reduxjs/toolkit' 
import chatSliceReducer from './Slices/ChatSlice'

const Store = configureStore({
    reducer: chatSliceReducer,
})


export default Store;