import { useState } from "react";
import Ingredients from "./Ingredients";

function Input() {
  const [ingredient, getIngredient] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>(``);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    getIngredient((prev) =>
      prev.includes(inputValue) ? prev : [...prev, inputValue],
    );
    setInputValue(``);
  };

  return (
    <div className="mt-15 gap-2 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mt-6 max-w-3xl"
      >
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          aria-label="add ingredient"
          name="ingredient"
          placeholder="e.g. beans"
          className="flex-1 px-4 py-2.5 
               border border-gray-300 rounded-xl
               text-sm text-gray-900
               placeholder:text-gray-400
               focus:outline-none focus:ring-2 
               focus:ring-black focus:border-black
               transition"
        />

        <button
          type="submit"
          className="bg-black text-white 
               px-5 py-2.5 
               text-sm font-medium 
               rounded-xl 
               hover:bg-gray-800 
               active:scale-95
               transition-all duration-150"
        >
          Add Ingredient
        </button>
      </form>
      <div className="mt-20 self-center ">
        <Ingredients ingredients={ingredient} />
      </div>
    </div>
  );
}

export default Input;
