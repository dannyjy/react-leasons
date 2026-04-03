type DigitBtnProp = {
    BgColor: string
    Text: string
    Dispatch: () => void
}

type Action = {
    type: "Evaluate" | "Clear" | "Add Digit" | "Percentage" | "Delete Digit" | "PositiveToggle"
    payload?: {
        digit: string
    }
}

type State = {
    currentOperand: string
    answer: string | null
}
export type { DigitBtnProp, Action, State }