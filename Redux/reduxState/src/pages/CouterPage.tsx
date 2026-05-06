import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../redux/store"
import Button from "../components/ui/Button";

const CouterPage = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch<AppDispatch>()

    const Increment = () => dispatch({ type: "INCREMENT"})
    const Decrement = () => dispatch({ type: "DECREMENT"})

    return (
        <div className="flex items-center gap-4">
            <Button text="Decrement" onButtonClick={Decrement} style=""/>
            <h1>Counter: {count}</h1>
            <Button text="Increment" onButtonClick={Increment} style=""/>
        </div>
    )
}

export default CouterPage