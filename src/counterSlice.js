import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    temp: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += Number(state.temp)
            console.log(state.value)
        },
        decrement: (state) => {
            state.value -= Number(state.temp)
        },
        incrementByAmount: (state, action) => {
            state.temp = action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer