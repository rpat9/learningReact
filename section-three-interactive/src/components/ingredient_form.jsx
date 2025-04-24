export default function IngredientForm(props) {
    return (
        <main className="pt-[30px] pb-[10px] pr-[30px] pl-[30px]">

            <form className="flex gap-[15px] justify-center align-center">

                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    className="grow border rounded-sm border-solid outline-[1px] border-black px-2 py-1 shadow-md shadow-amber-50 min-w-3xs max-w-xl"
                />

                <button type="submit" className="text-[0.875rem] bg-blue-300 cursor-pointer border-black outline-[1px] px-4 py-1 rounded hover:scale-107 transition duration-300 ease-in-out before:content-['+'] before:mr-[5px]">Add Ingredient</button>

            </form>

        </main>
    )
}