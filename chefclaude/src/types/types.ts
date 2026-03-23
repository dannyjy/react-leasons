import { type Dispatch, type SetStateAction } from "react"

type AddIngredientsProps = {
    callback: Dispatch<SetStateAction<string[]>>
}

export type {AddIngredientsProps}