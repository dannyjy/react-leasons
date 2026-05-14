export interface ButtonProp {
    style: string
    text: string;
    onButtonClick: () => void
}

export interface UserType {
    name: string
    age: number
    email: string
}

export interface UserAction {
    payload: UserType
    type?: string
}