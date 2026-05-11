import { useContext } from "react"
import { CountContext } from "../context/context"
import type { CountType } from "../types/types"

const CounterPage = () => {
    const { count, increment, decrement } = useContext(CountContext) as CountType
    return (
        <div className="space-x-4">
            <button className='bg-black px-5 py-2 rounded-md text-gray-200'onClick={decrement}>Decrement</button>
            <span className="text-xl font-medium">{count}</span>
            <button className='bg-black px-5 py-2 rounded-md text-gray-200' onClick={increment}>Increment</button>
        </div>
    )
}

export default CounterPage