import { useState } from "react";
import IngredientList from "./ingredient_list.jsx";
import ClaudeRecipe from "./claude_recipe.jsx";
import { getRecipeFromClaude } from "../../claudeService.js";

export default function IngredientForm() {

    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState(false);



    async function getRecipe(){
        const generatedRecipeMD = await getRecipeFromClaude(ingredients)
        setRecipe(generatedRecipeMD)
    }


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


    
    return (
        <section className="pt-8 pb-4 px-8">

            <form action={addIngredient} className="flex gap-4 justify-center w-full max-w-3xl min-w-3xs mx-auto">

                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient button"
                    name="ingredient"
                    className="grow border rounded-sm border-solid outline-[1px] border-black px-2 h-10 shadow-md shadow-amber-50"
                />

                <button type="submit" className="text-white font-semibold bg-orange-500 cursor-pointer border border-black px-2 h-10 shadow-md rounded hover:scale-105 transition duration-300 ease-in-out">+ Add Ingredient</button>

            </form>

            {ingredients.length > 0 && 
                <IngredientList 
                ingredientsArray={ingredients} 
                getRecipe={getRecipe}/>
            }

            {recipe && <ClaudeRecipe recipe={recipe}/>}

        </section>
    )
}