type DigitBtnProp = {
    BgColor: string
    Text: string
    Dispatch: () => void
}

type Action = {
    type: "Evaluate" | "Clear" | "Add Digit" | "Percentage" | "Delete Digit" | "PositiveToggle" | "Operation"
    payload?: {
        digit?: string
        operation?: string
    }
}

type State = {
    prevOperand: string
    currentOperand: string
    operation: string
}
export type { DigitBtnProp, Action, State }