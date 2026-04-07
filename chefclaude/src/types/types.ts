import { type Dispatch, type SetStateAction } from "react"

type AddIngredientsProps = {
    callback: Dispatch<SetStateAction<string[]>>
}

type IngredientsType = {
    ingredients: string[]
}

type ClaudResponseProps = {
    response: string
    isLoading: boolean
    error: string | null
}

export type {AddIngredientsProps, IngredientsType, ClaudResponseProps}