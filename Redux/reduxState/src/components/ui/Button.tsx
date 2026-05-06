import type { ButtonProp } from "../../types/types"

const Button = ({text, style, onButtonClick}: ButtonProp) => {
  return <button className={`cursor-pointer py-2 px-5 rounded-md bg-black text-gray-200 ${style}`} onClick={onButtonClick}>{text}</button>
}

export default Button