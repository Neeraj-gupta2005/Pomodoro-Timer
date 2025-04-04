import React, { useState } from 'react'
import { createContext } from 'react'

// Create a context
export const GlobalContext = createContext(null);


export default function GlobalState({children}){
    const [count, setcount] = useState(0)
    return (
        <GlobalContext.Provider value={count}>
            {children}
        </GlobalContext.Provider>
    )
}