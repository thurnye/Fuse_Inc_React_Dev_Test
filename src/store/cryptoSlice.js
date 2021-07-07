import {createSlice} from '@reduxjs/toolkit'

// initialize the state

const initialState = {
    crypto: []
}

const cryptoSlice = createSlice({
    name: 'coinData',
    initialState: initialState,
    reducers: {
        addCryptos(state, action){
            // console.log(action.payload.cryptoCoins)
            state.crypto = action.payload.cryptoCoins
        }
    }
})

export default cryptoSlice.reducer 
export const cryptoActions = cryptoSlice.actions