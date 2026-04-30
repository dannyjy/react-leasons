import { useEffect, useMemo, useState } from "react"
import type { PaginatedProducts, Product } from "../types/types";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard"
import { useSearchParams } from "react-router";

const Home = () => {
    const [input, setInput] = useState("");
    const [currentPage,setCurrentPage] = useState(1)
    const [lastPage,setLastPage] = useState(0)
    const [products, setProducts] = useState<Product[]>([])
    const [searchProducts, setSearchProducts] = useState<Product[]>([])
    const [searchParams, setSearchParams] = useSearchParams();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value
        setInput(value)
        setSearchParams({search: value})
    }
    
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`https://jsonfakery.com/products/paginated?page=${currentPage}`)
    
                if(!response.ok){
                    throw new Error(`Error with status: ${response.status}`)
                }
    
                const data: PaginatedProducts = await response.json()
                setProducts(data.data)
                setLastPage(data.last_page)
                
            } catch (error: unknown) {
                if(error instanceof Error){
                    console.log(error.message)
                }
            }
        }
        fetchProducts()

    },[currentPage])

    useEffect(() => {
        async function allProducts() {
            try {
                const response = await fetch(`https://jsonfakery.com/products`)

                if (!response.ok) {
                    throw new Error(`Error with status: ${response.status}`)
                }

                const data: Product[] = await response.json()
                setSearchProducts(data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log(error.message)
                }
            }
        }
        allProducts()
    },[])

    const next = () => {
        if(currentPage >= lastPage) return
        setCurrentPage(prev => prev + 1)
    }

    const previousPage = () => {
        if(currentPage < 2) return 
        setCurrentPage(prev => prev - 1)
    }

    const allSearchedProducts = useMemo(() => {
        const category = searchParams.get("search")
        if(!category) return [] as Product[]
        return searchProducts.filter(product => product.product_category.name.toLowerCase().includes(category.toLowerCase()))
    }, [searchParams, searchProducts])

    return (
        <div className="p-4">
            <div className="space-y-4">
                <section className="flex justify-center items-center">
                    <input type="text" name="search" className=" md:w-100 px-3 py-2 focus:outline-gray-500 rounded-xl border-2 border-gray-400" placeholder="Search products" value={input} onChange={handleInputChange}/>
                </section>
                {
                    input === "" ? (
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-medium">Products({products.length})</h1>
                            <div className="flex gap-4 items-center">
                                <Button text="Previous" handleClick={previousPage} />
                                <span className="text-xl">{currentPage} of {lastPage}</span>
                                <Button text="Next" handleClick={next} />
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <main className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 py-10">
                {
                    input && searchProducts ? (
                        searchProducts.length <= 0 ? <h1>No Product found with that category</h1> : (
                            allSearchedProducts.map(product => <ProductCard key={product.id} {...product} />)
                        )
                    )
                    : (
                        products.length <= 0 ? <h1 className="text-xl">No Products avialable</h1> : (
                            products.map(product => <ProductCard key={product.id} {...product} />)
                        )
                    )
                }
            </main>
        </div>
    )
}

export default Home