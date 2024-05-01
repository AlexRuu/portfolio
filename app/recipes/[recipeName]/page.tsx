import prismadb from "@/lib/prismadb";
import DisplayRecipe from "../components/displayRecipe";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { recipeName: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const recipeName = params.recipeName.replaceAll("-", " ");
  const name = recipeName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  return {
    title: `${name}`,
  };
};

const SingleRecipePage = async ({
  params,
}: {
  params: { recipeName: string };
}) => {
  const recipeName = params.recipeName.replaceAll("-", " ");

  const recipe = await prismadb.recipe.findFirst({
    where: { title: { equals: recipeName, mode: "insensitive" } },
    include: {
      RecipeComponent: {
        include: {
          ingredients: {
            include: { measurement: { include: { unit: true } } },
          },
          directions: true,
        },
      },
      RecipeImage: true,
    },
  });

  if (!recipe) {
    return notFound();
  }

  return (
    <main className="min-h-[500px] mt-24 pb-[30px] small:mt-0 xsmall:mt-0 px-20">
      <DisplayRecipe recipe={recipe} />
    </main>
  );
};

export default SingleRecipePage;
