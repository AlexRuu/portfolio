import prismadb from "@/lib/prismadb";

import DisplayRecipe from "./components/displayRecipe";

const RecipesPage = async () => {
  const recipes = await prismadb.recipe.findMany({
    include: { RecipeImage: true },
  });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-24">
      <div>hi</div>
    </main>
  );
};

export default RecipesPage;
