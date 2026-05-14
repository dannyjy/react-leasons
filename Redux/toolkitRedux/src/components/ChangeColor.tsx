import { useState } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../features/store"
import Button from "./ui/Button"
import { changeColor } from "../features/themeSlice"

const ChangeColor = () => {
    const [color, setColor] = useState("")
    const dispatch = useDispatch<AppDispatch>()

    const changeTextColor = () => dispatch(changeColor({color}))
    return (
        <div className="flex gap-2">
            <input type="text" className="border-2 p-2 border-gray-500 rounded-md" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}/>
            <Button text='Change Color' style='' onButtonClick={changeTextColor}/>
        </div>
    )
}

export default ChangeColor