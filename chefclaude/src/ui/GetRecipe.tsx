import { useState } from "react"
import ClaudResponse from "../ui/ClaudResponse";
import { type IngredientsType } from "../types/types";
import { getRecipe } from '../ai'

const GetRecipe = ({ ingredients }: IngredientsType) => {
    const [recipe, setRecipe] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleRecipeResponse = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const answer = await getRecipe(ingredients) as string
            setRecipe(answer)
        } catch {
            setError("Unable to generate a recipe right now. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <section className="flex items-end justify-between bg-[#F0EFEB] rounded-md p-5 my-10">
                <div >
                    <h3 className="font-bold">Ready for a Recipe?</h3>
                    <p className="text-[#6b7280]">Generate a recipe from the list of ingredients.</p>
                </div>
                <button
                    onClick={handleRecipeResponse}
                    disabled={isLoading}
                    className="bg-[#d17557] text-[#fafaf8] px-3 py-2 text-[0.9rem] rounded-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Generating..." : "Get a recipe"}
                </button>
            </section>
            {recipe && <ClaudResponse response={recipe} isLoading={isLoading} error={error} />}
        </> 
    )
}

export default GetRecipe