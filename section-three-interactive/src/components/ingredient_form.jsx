import { useState } from "react"
import TrashIcon from "../assets/trashIcon.jsx"

export default function IngredientForm() {

    const [ingredients, setIngredients] = useState([]);


    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");

        if (ingredients.includes(newIngredient)){
            alert("You already added this ingredient");
            return;
        } else if (!/^[a-zA-Z\s\-]+$/.test(newIngredient)) {
            alert("Please enter a valid ingredient");
            return;
        }

        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }


    /* remove an item from the list
    function handleDelete(event){
        event.preventDefault();
        const li = event.currentTarget.parentElement;
        const ingredientText = li.textContent;
        setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient !== ingredientText));
    }*/


    const ingredientsList = ingredients.map(ingredient => (
        <li className="bg-orange-500 text-white text-lg font-semibold w-[735px] mb-3 p-2 min-w-3xs max-w-3xl flex justify-between hover:scale-102 hover:bg-orange-600 transition duration-300 ease-in-out cursor-default" key = {ingredient}> 
            {ingredient}

            <button className="cursor-pointer" 
                aria-label="Remove ingredient button"
                /*onClick={handleDelete}*/>

                <div className="w-5 h-5">
                    {TrashIcon}
                </div>
                
            </button>
        </li>
    ));

    
    return (
        <main className="pt-8 pb-4 px-8">

            <form action={addIngredient} className="flex gap-4 justify-center ">

                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient button"
                    name="ingredient"
                    className="grow border rounded-sm border-solid outline-[1px] border-black px-2 h-10 shadow-md shadow-amber-50 min-w-3xs max-w-xl"
                />

                <button type="submit" className="text-white font-semibold bg-orange-500 cursor-pointer border border-black px-2 h-10 shadow-md rounded hover:scale-105 transition duration-300 ease-in-out">+ Add Ingredient</button>

            </form>

            <div className="flex justify-center ">

                <ul className="mt-3">
                    {ingredientsList}
                </ul>

            </div>

        </main>
    )
}