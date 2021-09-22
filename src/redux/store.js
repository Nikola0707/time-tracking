import { configureStore } from '@reduxjs/toolkit'
import typeReducer from './type/typeSlice'

export const store = configureStore({
    reducer:{
        type: typeReducer
    }
})
