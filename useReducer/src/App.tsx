import { useReducer } from 'react'

type Action = {
  type: "Decrement" | "Increment"
}

type InitialState = {
  count: number
  error: null | string
}

function reducer(state: InitialState, action: Action): InitialState {
  switch(action.type){
    case "Decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return { ...state,count: hasError ? state.count : newCount, error: hasError ? "Min Count reached" : null} 
    }
    case "Increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 10;
      return { ...state,count: hasError ? state.count : newCount, error: hasError ? "Max Count reached" : null }
    }
    default: 
      return state
  }
}


const App = () => {
  const [state,dispatch] = useReducer(reducer, { count: 0, error: null})

  function Increment(){
    dispatch( { type: "Increment"} )
  }

  function Decrement(){
    dispatch({ type: "Decrement" })
  }

  return (
    <div className='pl-4'>
      <h1>{state.count}</h1>
      {state.error && <h1>{state.error}</h1>}
      <button onClick={Decrement} className='px-4 py-3 text-white bg-black rounded-2xl mr-1'>Decrement</button>
      <button onClick={Increment} className='px-4 py-3 text-white bg-black rounded-2xl'>Increment</button>
    </div>
  )
}

export default App