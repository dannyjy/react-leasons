import type { ProductProp } from "../../types/types"
import { useEffect, useState } from "react"

const Products = ({ image, name, price, description, product_category }: ProductProp) => {
    const [maxText, setMaxText] = useState(false)
    const text = description.length > 80 && !maxText ? `${description.slice(0, 80)}... ` : description

    const handleSeeMore = () => setMaxText(prev => !prev)
    const handleScrollClose = () => {
        if(window.scrollY > 500){
            setMaxText(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollClose)
        return () => {
            window.removeEventListener("scroll", handleScrollClose)
        }
    },[maxText])

    const backgroundStyle = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div>
            <div
                className="w-full h-50 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg relative"
                style={backgroundStyle}
            >
                <p className="bg-gray-900 w-fit rounded-lg text-sm text-white p-2 absolute bottom-2 right-2">${price}</p>
            </div>
            {/* <img src={image} alt={name} className="w-full h-50 rounded-sm" /> */}
            <section className="space-y-2">
                <h1>
                    <p className="text-xl font-medium">{name}</p>
                    <p className="font-mono font-medium">{product_category.name}</p>
                </h1>
                <p className="text-sm">
                    <span>{text} </span>
                    <button className="font-medium text-sm cursor-pointer" onClick={handleSeeMore}>See {!maxText ? "more" : "less"}</button>
                </p>
            </section>
        </div>
    )
}

export default Products