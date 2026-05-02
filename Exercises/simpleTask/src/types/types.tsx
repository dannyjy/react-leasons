type HelloProp = {
    name: string
}

type AlterBtnProp = {
    id: number | null
    text: string
}

type State = {
    counter: number
}

type Action = {
    type: 'Increment'
}

type JokesProp = {
    id: number
    setup: string
    punchline: string
}

interface UserProp {
    user: {
        username: string
        picture: { large: string }
        name: {
            title: string
            first: string
            last: string
        }
        email: string
    }
}

export type { HelloProp, AlterBtnProp, State, Action, JokesProp, UserProp }