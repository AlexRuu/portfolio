import { Prisma } from "@prisma/client";

type Recipe = Prisma.RecipeGetPayload<{
  include: { RecipeComponent: true; RecipeImage: true };
}>;

interface DisplayRecipeProps {
  recipe: Recipe;
}

const DisplayRecipe: React.FC<DisplayRecipeProps> = ({ recipe }) => {
  return <div>{recipe.title}</div>;
};

export default DisplayRecipe;
