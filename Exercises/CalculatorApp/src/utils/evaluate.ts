import type { State } from "../types/types";

function evaluate({operation, prevOperand, currentOperand}: State): string {
    const prev = parseFloat(prevOperand)
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return ""

    switch (operation) {
        case "+":
            return (prev + current).toString()
        case "-":
            return (prev - current).toString()
        case "÷":
            return (prev / current).toString()
        case "×":
            return (prev * current).toString()
        default:
            return ""
    }
}


export default evaluate