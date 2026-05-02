import { useReducer } from "react"
import type { State, Action } from "../../types/types"

function reducer(state: State, action: Action) {
    const { type } = action
    switch(type) {
        case "Increment": { return {...state, counter: state.counter + 1} }

        default: 
            return state
    }
}

const Counter = () => {
    // const [count,setCount] = useState<number>(0);
    const [state,dispatchCounter] = useReducer(reducer, { counter: 0})

    // const handleIncrement = () => setCount(prevCount => prevCount + 1)

    return (
        <div className="flex flex-col py-3 justify-center items-center space-y-3 bg-teal-950">
            <h1>Button has been clicked: {state.counter}</h1>
            <button onClick={() => dispatchCounter({ type: "Increment"})} className="bg-gray-900 px-4 py-2 rounded">Increment</button>
            {/* <h1>Button has been clicked: {count}</h1> */}
            {/* <button onClick={handleIncrement} className="bg-gray-900 px-4 py-2 rounded">Increment</button> */}
        </div>
    )
}

export default Counter