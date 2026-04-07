import { useState } from "react";
import AddIngredients from "../ui/AddIngredients";
import IngredientsList from "./IngredientsList";

const Main = () => {
    const [ingredients, setIngredients] = useState<string[]>(['fish','eggs','potatoes','chicken'])
    return (
        <div className="py-12 px-4">
            <AddIngredients callback={setIngredients} />
            <IngredientsList ingredients={ingredients}/>
        </div>
    )
}

export default Main