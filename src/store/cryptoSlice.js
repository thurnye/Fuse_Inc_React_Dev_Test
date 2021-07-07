import {createSlice} from '@reduxjs/toolkit'

// initialize the state

const initialState = {
    cryptoData: {}
}

const cryptoSlice = createSlice({
    name: 'cyptos',
    initialState: initialState,
    reducers: {
        addCryptos(state, action){
            state.cryptoData = action.payload.cryptoCoins
            // console.log(state.cryptoData)
        }
    }
})

export default cryptoSlice.reducer 
export const cryptoActions = cryptoSlice.actions