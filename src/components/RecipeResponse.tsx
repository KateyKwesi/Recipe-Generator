function RecipeResponse() {
  return (
    <section className="mt-12 px-4">
      <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Chef Claude Recommends:
        </h2>

        <article
          className="text-gray-600 leading-8 space-y-6"
          aria-live="polite"
        >
          <p className="text-lg">
            Based on the ingredients you have available, I would recommend
            making a simple and delicious{" "}
            <strong className="text-gray-900">Beef Bolognese Pasta</strong>.
            Here is the recipe:
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Beef Bolognese Pasta
            </h3>

            <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
            <ul className="list-disc list-inside space-y-1 marker:text-red-500">
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Instructions</h4>
            <ol className="list-decimal list-inside space-y-2 marker:font-semibold marker:text-gray-800">
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5–7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2–3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15–20
                minutes, stirring occasionally.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with fresh basil or grated Parmesan if
                desired.
              </li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}

export default RecipeResponse;
