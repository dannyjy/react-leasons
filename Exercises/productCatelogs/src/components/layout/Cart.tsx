import { useContext, useMemo } from "react"
import type { StyleProp } from "../../types/types"
import Button from "../ui/Button"
import CartCard from "../ui/CartCard"
import { CartCountContext } from "../../context/context"

const Cart = ({style}: StyleProp) => {
    const cart = useContext(CartCountContext)
    const submittedCart = useMemo(() => cart?.submittedCart ?? [], [cart?.submittedCart])

    const totalPrice = useMemo(() => {
        return submittedCart.reduce((prev,current) => prev + (current.price * current.quantity),0)
    },[submittedCart])

    const handleDelete = (id: string) => {
        cart?.setSubmittedCart(prop => prop.filter(product => product.id !== id))
    }

    return (
        <div className={`h-full p-4 border border-white/10 text-gray-200 ${style} flex flex-col justify-between`}>
            <div className="">
                <h1 className="text-lg font-bold pb-4">YOUR COLLECTION</h1>
                <section className="grid grid-cols-1 gap-3 py-4">
                    {
                        submittedCart.length > 0 ? 
                            submittedCart.map(product => <CartCard key={product.id} {...product} onDelete={handleDelete}/>)
                        : 
                            <h1 className="text-center text-zinc-700 text-xl italic">No Cart items</h1>
                    }
                </section>
            </div>
            <CartFooter total={totalPrice}/>
        </div>
    )
}


function CartFooter({total}: {total: number}) {
    return (
        <div className="border-t border-gray-500 space-y-4">
            <div className="flex justify-between items-center py-4">
                <h1>TOTAL VALUE</h1>
                <p className="text-white text-3xl">${total.toFixed(2)}</p>
            </div>
            <Button  handleOperation={() => {}} style="bg-white text-black font-medium hover:bg-gray-300" name="finalize Acquisition"/>
        </div>
    )
}

export default Cart