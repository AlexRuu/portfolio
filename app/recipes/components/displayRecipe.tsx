"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Prisma } from "@prisma/client";
import Image from "next/image";

type Recipe = Prisma.RecipeGetPayload<{
  include: { RecipeComponent: true; RecipeImage: true };
}>;

interface DisplayRecipeProps {
  recipe: Recipe;
}

const DisplayRecipe: React.FC<DisplayRecipeProps> = ({ recipe }) => {
  return (
    <div className="text-center w-full h-screen">
      <h1 className="md:text-3xl text-2xl mb-4">{recipe.title}</h1>
      <div className="flex text-center justify-center gap-1 p-2">
        <p>
          <span className="font-bold px-1">Prep Time:</span>
          {recipe.prepTime}
        </p>
        <p>
          <span className="font-bold px-1">Cook Time:</span>
          {recipe.cookTime}
        </p>
        <p>
          <span className="font-bold px-1">Total Time:</span>
          {recipe.totalTime}
        </p>
      </div>
      <div className="mb-5">
        <p>
          <span className="font-bold px-1">Serving Size:</span>
          {recipe.servingSize}
        </p>
      </div>
      <div className="block relative text-center px-10 py-10">
        <p>{recipe.description}</p>
      </div>
      <div className="w-full">
        <div className="md:pb-0 pb-0 mb-0 block relative min-w-[300px] min-h-[430px]">
          <AspectRatio ratio={6 / 6}>
            <Image
              src={recipe.RecipeImage[0].url}
              alt={recipe.title}
              fill
              className="block rounded-[30px] overflow-hidden relative max-w-full border-none"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default DisplayRecipe;
