import type { DigitBtnProp } from "../../types/types"

const DigitButton = ({ Text, Dispatch, BgColor }: DigitBtnProp) => {
    return <button className={`${BgColor} p-6 rounded-4xl cursor-pointer`} onClick={Dispatch}>{Text}</button>
}

export default DigitButton