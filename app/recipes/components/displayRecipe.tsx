"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Recipe = Prisma.RecipeGetPayload<{
  include: {
    RecipeComponent: {
      include: {
        ingredients: { include: { measurement: { include: { unit: true } } } };
        directions: true;
      };
      orderBy: { step: "asc" };
    };
    RecipeImage: true;
  };
}>;

interface DisplayRecipeProps {
  recipe: Recipe;
}

const DisplayRecipe: React.FC<DisplayRecipeProps> = ({ recipe }) => {
  return (
    <div className="text-center w-full">
      <h1 className="md:text-4xl text-2xl mb-4 font-bold">{recipe.title}</h1>
      <div className="flex text-center justify-center gap-5 p-2 mb-8">
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
      <Link
        href="#recipe"
        className="hover:before:scale-x-100 relative before:w-full before:h-[2px] before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 "
      >
        Jump to Recipe
      </Link>
      <div className="block relative text-center px-10 py-5">
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
      <div
        id="recipe"
        className="grid md:grid-cols-[25%_75%] grid-cols-1 mt-10"
      >
        <div className="text-left p-3 mr-5 bg-blue-50 rounded-md overflow-hidden md:max-h-[70%] max-h-full">
          <h2 className="text-2xl font-semibold">Ingredients</h2>
          <p className="text-lg">for {recipe.servingSize}</p>
          <div>
            {recipe.RecipeComponent.map(
              (component) =>
                component.ingredients.length > 0 && (
                  <ul key={component.id} className="pt-2">
                    <h5 className="font-semibold text-lg">{component.title}</h5>
                    {component.ingredients.map((ingredient) => (
                      <li key={ingredient.id} className="pb-1">
                        {ingredient.measurement !== null && (
                          <>
                            <span className="font-medium pr-1">
                              {ingredient.measurement?.amount}
                            </span>
                            <span
                              className={cn(
                                "font-medium",
                                ingredient.measurement.unit && "pr-1"
                              )}
                            >
                              {ingredient.measurement.unit?.title}
                            </span>
                          </>
                        )}
                        <span className="px-0 lowercase">
                          {ingredient.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                )
            )}
          </div>
        </div>
        <div className="text-left p-3">
          <h2 className="text-2xl font-semibold">Preparation</h2>
          <div>
            {recipe.RecipeComponent.map((step) => (
              <>
                {step.directions.length > 0 && (
                  <div key={step.id}>
                    <h6 className="font-semibold pb-1">{step.title}</h6>
                    <ul className="pb-5">
                      {step.directions.map((direction) => (
                        <li key={direction.id} className="pb-1">
                          {direction.step}.
                          <span className="pl-1">{direction.direction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRecipe;
