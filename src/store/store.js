import {configureStore} from "@reduxjs/toolkit"

import cryptoReducer from "./cryptoSlice"

const store = configureStore({
    reducer: {
        cryptos: cryptoReducer
    }
})



export default store;