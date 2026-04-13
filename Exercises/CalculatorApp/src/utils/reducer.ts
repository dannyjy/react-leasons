import type { Action, State } from "../types/types"
import evaluate from "../utils/evaluate"

function reducer(state: State, { type, payload }: Action) {
    const { operation ,currentOperand, prevOperand } = state

    switch (type) {
        case "Evaluate":
            if(currentOperand === "" || operation === "" || prevOperand === "") return state
            return {...state, currentOperand: evaluate(state), prevOperand: "", operation: ""}

        case "Add Digit":
            if (currentOperand === "0" && payload!.digit === "0") return state
            if (currentOperand.includes(".") && payload!.digit === ".") return state
            return { ...state, currentOperand: `${currentOperand || ""}${payload!.digit}` }

        case "Operation":
            if (currentOperand === "" && prevOperand === "") return state
            if(prevOperand === "") {
                return { ...state, operation: payload?.operation as string, prevOperand: currentOperand, currentOperand: ""}
            }
            if(currentOperand === ""){
                return { ...state, operation: payload?.operation as string}
            }
            return {
                ...state,
                prevOperand: evaluate(state),
                operation: payload?.operation as string,
                currentOperand: ""
            }

        case "PositiveToggle":
            if(currentOperand === "") return state
            return {...state, currentOperand: (parseFloat(currentOperand) * -1).toString()}

        case "Percentage":
            if (currentOperand === "") return state
            return { ...state, currentOperand: (parseFloat(currentOperand) / 100).toString()}

        case "Delete Digit":
            if(currentOperand === "") {
                return { ...state, prevOperand: "", operation: "", currentOperand: (`${prevOperand}${operation}`).slice(0,-1)}
            }
            return {...state, currentOperand: currentOperand.slice(0,-1)}

        case "Clear": 
            return { ...state, currentOperand: "", prevOperand: "", operation: ""}

        default:
            return state
    }
}

export default reducer