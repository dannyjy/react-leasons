import { useState } from "react"
import { CountContext } from "../context/context"
import type { CountType } from "../types/types";

const CounterContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ count, setCount ] = useState(0);
    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    const Counter: CountType = {
        count,
        increment,
        decrement
    }

    return (
        <CountContext.Provider value={Counter}>
            {children}
        </CountContext.Provider>
    )
}

export default CounterContextProvider