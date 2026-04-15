import type { ProductProp } from "../../types/types"
import Button from "./Button"

const ProductCard = ({ id, name, price, category, image, description, handleAddCart }: ProductProp) => {
  return (
    <section className="bg-[#141414] rounded text-gray-500">
        <img src={image} alt={name} className="w-fit grayscale-100 hover:grayscale-0"/>
        <main className="p-3 space-y-3 text-lg">
            <div className="flex justify-between items-center">
                <p>{category}</p>
                <p>${price}</p>
            </div>
            <h1 className="text-xl text-white font-bold">{name}</h1>
            <p>{description}</p>
            <Button
              name="Add to collection"
              style="text-white hover:bg-white hover:text-black"
              handleOperation={() => handleAddCart({ id, name, price, category, image, description, quantity: 1 })}
            />
        </main>
    </section>
  )
}

export default ProductCard