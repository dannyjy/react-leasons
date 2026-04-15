import type { CartCardProps } from "../../types/types"
import deleteImage from "../../assets/delete.svg"

const CartCard = ({ id, image, price, name, quantity, onDelete }: CartCardProps) => {
  return (
    <section className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4 text-zinc-500 text-sm">
            <img src={image} alt={name} className="w-10 grayscale-75"/>
            <main>
                <h1>{name}</h1>
                <p>{quantity} × ${price}.00</p>
            </main>
        </div>
        <button onClick={() => onDelete(id)} className="cursor-pointer">
            <img src={deleteImage} alt="Delete" className="w-5" />
        </button>
    </section>
  )
}

export default CartCard