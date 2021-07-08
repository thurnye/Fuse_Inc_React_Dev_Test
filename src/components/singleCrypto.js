import React from 'react'
import { useLocation } from 'react-router'


export default function SingleCrypto() {
    
    const location = useLocation()
    console.log(location.state.coinId)
    return (
        <div>
            this is one currency info
        </div>
    )
}
