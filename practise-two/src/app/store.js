import { configureStore } from '@reduxjs/toolkit'
import personReducer from '../feature/personSlice'

const store = configureStore({
    reducer: {
        personData : personReducer
    }
})

export default store