import {configureStore} from "@reduxjs/toolkit"

import cryptoReducer from "./cryptoSlice"

const store = configureStore({
    reducer: {
        cypto: cryptoReducer
    }
})



export default store;