import type { ButttonProp } from "../../types/types"

const Button = ({name, style, handleOperation}: ButttonProp) => {
  return (
    <button onClick={handleOperation} className={`px-5 py-3 cursor-pointer uppercase border w-full border-white ${style}`}>{name}</button>
  )
}

export default Button