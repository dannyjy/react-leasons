
type ButtonProp = {
    style?: string
    text: string
    handleClick: () => void
}

const Button = ({ text, handleClick, style }: ButtonProp) => {
  return (
    <button className={`text-gray-100 rounded-lg px-6 py-2 bg-black cursor-pointer ${style}`} onClick={handleClick}>{text}</button>
  )
}

export default Button