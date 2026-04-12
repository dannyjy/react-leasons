import { useReducer } from "react"
import DigitButton from "../ui/CalculatorButton"
import OperationButton from "../ui/OperationButton"
import deleteIcon from "../../assets/delete.svg"
import reducer from "../../utils/reducer"

const Main = () => {
    const [state, dispatch] = useReducer(reducer, { currentOperand: "", prevOperand: "", operation: ""});

    return (
        <div className="flex justify-center items-center h-screen">
            <main className="rounded-2xl p-2 space-y-3 text-gray-300 font-bold text-2xl">
                <div className="w-96 h-40 space-y-6 bg-[#121414] rounded-2xl overflow-hidden p-4 flex flex-col justify-center items-end">
                    <h2 className="text-xl">{state.prevOperand} <span className="text-xl text-green-600">{state.operation}</span></h2>
                    <h3 className="text-2xl">{state.currentOperand}</h3>
                </div>
                <div className="border-b-2 border-gray-800 flex justify-end pr-3 pb-2">
                    <button className="cursor-pointer" onClick={() => dispatch({ type: "Delete Digit" })}>
                        <img src={deleteIcon} alt="delete" className="w-7" />
                    </button>
                </div>
                <section className="grid grid-cols-4 gap-3">
                    <OperationButton Text="AC" BgColor="bg-[#132335]" Dispatch={() => dispatch({ type: "Clear" }) } />
                    <OperationButton Text="+/-" BgColor="bg-[#132335]" Dispatch={() => dispatch({ type: "PositiveToggle" }) } />
                    <OperationButton Text="%" BgColor="bg-[#132335]" Dispatch={() => dispatch({ type: "Percentage" }) } />
                    <OperationButton Text="÷" BgColor="bg-[#132335]" Dispatch={() => dispatch({ type: "Operation", payload: { operation: "÷" } }) } />
                    {["7", "8", "9"].map((num, i) => <DigitButton key={i} Text={num} BgColor="bg-[#171919]" Dispatch={() => dispatch({ type: "Add Digit", payload: { digit: num } })} />)}
                    <OperationButton BgColor="bg-[#132335]" Text="×" Dispatch={() => dispatch({ type: "Operation", payload: { operation: "×" } })} />
                    {["4", "5", "6"].map((num, i) => <DigitButton key={i} Text={num} BgColor="bg-[#171919]" Dispatch={() => dispatch({ type: "Add Digit", payload: { digit: num } })} />)}
                    <OperationButton BgColor="bg-[#132335]" Text="-" Dispatch={() => dispatch({ type: "Operation", payload: { operation: "-" } })} />
                    {["1", "2", "3"].map((num, i) => <DigitButton key={i} Text={num} BgColor="bg-[#171919]" Dispatch={() => dispatch({ type: "Add Digit", payload: { digit: num } })} />)}
                    <OperationButton BgColor="bg-[#132335]" Text="+" Dispatch={() => dispatch({ type: "Operation", payload: { operation: "+" } })} />
                    {["0", "."].map((num, i) => <DigitButton key={i} Text={num} BgColor="bg-[#171919]" Dispatch={() => dispatch({ type: "Add Digit", payload: { digit: num } })} />)}
                    <OperationButton Text="=" BgColor="bg-green-700 col-span-2 rounded-xl" Dispatch={() => dispatch({ type: "Evaluate" })} />
                </section>
            </main>
        </div>
    )
}

export default Main