import { useState } from "react"
import ClaudResponse from "../ui/ClaudResponse";

const GetRecipe = () => {
    const [recipeShown, setRecipeShown] = useState<boolean>(false)

    const handleRecipeShown = () => setRecipeShown(prevShown => !prevShown)

    return (
        <>
            <section className="flex items-end justify-between bg-[#F0EFEB] rounded-md p-5 my-10">
                <div >
                    <h3 className="font-bold">Ready for a Recipe?</h3>
                    <p className="text-[#6b7280]">Generate a recipe from the list of ingredients.</p>
                </div>
                <button onClick={handleRecipeShown} className="bg-[#d17557] text-[#fafaf8] px-3 py-2 text-[0.9rem] rounded-md cursor-pointer">Get a recipe</button>
            </section>
            {recipeShown && <ClaudResponse />}
        </>
    )
}

export default GetRecipe