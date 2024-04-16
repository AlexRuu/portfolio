import prismadb from "@/lib/prismadb";
import DisplayRecipe from "../components/displayRecipe";
import { notFound } from "next/navigation";

const SingleRecipePage = async ({
  params,
}: {
  params: { recipeName: string };
}) => {
  const recipeName = params.recipeName.replaceAll("-", " ");

  const recipe = await prismadb.recipe.findFirst({
    where: { title: { equals: recipeName, mode: "insensitive" } },
    include: { RecipeComponent: true, RecipeImage: true },
  });

  if (!recipe) {
    return notFound();
  }

  return (
    <div>
      <DisplayRecipe recipe={recipe} />
    </div>
  );
};

export default SingleRecipePage;
