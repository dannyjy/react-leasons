import { type AddIngredientsProps } from "../types/types";

const AddIngredients = ({ callback }: AddIngredientsProps) => {

    const addIngredient = (formData: FormData): void => {
        const newIngredient = formData.get("ingredients") as FormDataEntryValue
        if (newIngredient === '') return;
        callback(prevIngredients => [...prevIngredients, newIngredient.toString()])
    }

    return (
        <form className="flex justify-center items-center gap-4" action={addIngredient}>
            <input type="text" name="ingredients" placeholder='e.g. oregano' className="flex-2 bg-white border-2 rounded-md border-[#d1d5db] py-1.5 px-2.5 max-w-120" />
            <button className="bg-[#141413] px-6 py-2 text-[#fafaf8] font-medium rounded-lg">+ Add ingredient</button>
        </form>
    )
}

export default AddIngredients