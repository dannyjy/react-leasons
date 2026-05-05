import type { CounterState, CounterAction } from './../../types/types';

const initialCounterState: CounterState = { count: 0 } 

export function counterReducer(state = initialCounterState, action: CounterAction){
    switch(action.type){
        case "INCREMENT": {
            return { ...state, count: state.count + 1 }
        }
        case "DECREMENT": {
            return { ...state, count: state.count - 1 }
        }
        default:
            return state
    }
}