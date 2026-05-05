export interface ButtonProp {
    style: string
    text: string;
    onButtonClick: () => void
}

export interface CounterState {
    count: number
}

export interface CounterAction {
    type: "INCREMENT" | "DECREMENT"
}