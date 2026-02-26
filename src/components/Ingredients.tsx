import { useEffect, useRef, useState } from "react";
import { main } from "./OpenRouter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  ingredients: string[];
};

export function Ingredients({ ingredients }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [response, setResponse] = useState<string>(``);
  const [isLoading, setIsLoading] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!isClicked) return;
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const ingredientStringify: string = ingredients.join(`,`);
        const result = await main(
          `i have ${ingredientStringify} Please give me a recipe you'd recommend I make!`,
        );
        if (result) {
          setResponse(result);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(`Error fetching recipe`, error);
        setResponse("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isClicked, ingredients]);

  const ingredientList = ingredients.map((ingredient, index) => {
    return (
      <ul
        key={index}
        className="list-disc list-inside space-y-2 marker:text-red-500 text-gray-700"
      >
        <li className="leading-7 hover:text-gray-900 transition-colors">
          {ingredient}
        </li>
      </ul>
    );
  });

  const handleRecipeBtn = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className=" max-w-3xl ">
      <h3 className="text-lg text-center text-gray-600 leading-8 mb-6 italic">
        {ingredientList.length === 0
          ? `Add minimum of 3 ingredients`
          : ` Ingredient(s) on hand :`}
      </h3>
      <div className=" mx-5">{ingredientList}</div>

      {ingredientList.length >= 3 && (
        <section className="mt-8 max-w-3xl mx-auto bg-[#F0EFEB] rounded p-6 shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Ready for a recipe?
              </p>
              <p className="text-gray-500 mt-1">
                Generate a recipe from your list of ingredients
              </p>
            </div>

            <button
              onClick={handleRecipeBtn}
              className="bg-[#D17557] hover:bg-[#b86449] active:scale-95 
                   transition-all duration-200 
                   text-[#FAFAF8] font-medium 
                   px-5 py-3 rounded-xl shadow-md"
            >
              {isClicked && response.length > 5
                ? ` Hide  recipe`
                : `Get recipe`}
            </button>
          </div>
        </section>
      )}

      {isClicked && (
        <section ref={targetRef} className="mt-12 px-4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            {isLoading ? (
              <p className="text-gray-500 animate-pulse text-lg">
                👨‍🍳 Cooking up something delicious...
              </p>
            ) : response ? (
              <>
                <article aria-live="polite">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                          {children}
                        </h2>
                      ),
                      p: ({ children }) => (
                        <p className="text-lg text-gray-600 leading-8 mb-6">
                          {children}
                        </p>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="font-semibold text-gray-900 mb-2 mt-4">
                          {children}
                        </h4>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-1 marker:text-red-500 my-4">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 marker:font-semibold marker:text-gray-800 my-4">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="leading-7">{children}</li>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-gray-900 font-semibold">
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {response}
                  </Markdown>
                </article>
              </>
            ) : null}
          </div>
        </section>
      )}
    </div>
  );
}

export default Ingredients;
