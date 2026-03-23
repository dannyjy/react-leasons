import {useState} from "react";
import GetRecipe from "../ui/GetRecipe";
import AddIngredients from "../ui/AddIngredients";

const Main = () => {
    const [ingredients, setIngredients] = useState<string[]>([])

    const ingredientsList = ingredients.map((ingredient,index) => {
        return <li key={index} className="font-medium text-[#475467]">{ingredient}</li>
    })
    
    return (
        <div className="py-12 px-4">
            <AddIngredients callback={setIngredients} />
            {
                ingredients.length > 0 && 
                <div className="flex justify-center items-center py-12">
                    <main className="min-w-165">
                        <h1 className="font-bold text-2xl pb-3">Ingredients on hand:</h1>
                        <ol className="list-decimal pl-5">{ingredientsList}</ol>
                        {ingredients.length >= 4 && <GetRecipe />}
                    </main>
                </div>
            }
        </div>
    )
}

export default Main