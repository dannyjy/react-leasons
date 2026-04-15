import { useCallback, useContext } from "react"
import { PRODUCTS } from "../../data/products"
import type { StyleProp, CartItem } from "../../types/types"
import ProductCard from "../ui/ProductCard"
import { CartCountContext } from "../../context/context"

const Cards = ({style}: StyleProp) => {
	const cart = useContext(CartCountContext)
	
	const addToCart = useCallback((product: CartItem) => {
		const submittedCart = cart?.submittedCart ?? []
		cart?.setSubmittedCart(prod => {
			const exitsCart = submittedCart.find(prod => prod.id === product.id)
			if(exitsCart){
				return prod.map(item => item.id === product.id ? {...item,quantity: item.quantity + 1} : item)
			}
			return [...prod, product]
		})
	},[cart])

	return (
		<div className={`text-gray-400 ${style} p-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3`}>
			{PRODUCTS.map(product => <ProductCard key={product.id} {...product} handleAddCart={addToCart}/>)}
		</div>
	)
}

export default Cards