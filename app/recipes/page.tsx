import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/ui/header";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Recipes`,
    description: "Try making some of my favourite recipes!",
  };
};

const RecipesPage = async () => {
  const recipes = await prismadb.recipe.findMany({
    include: { RecipeImage: true },
  });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-24">
      <div className="text-center w-full">
        <Header title="Recipes" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <Link
                href={`/recipes/${recipe.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <div className="relative block text-center group">
                  <AspectRatio
                    ratio={1 / 1}
                    className="w-full h-full relative rounded-md"
                  >
                    <Image
                      src={recipe.RecipeImage[0].url}
                      fill
                      alt={recipe.title}
                      className="object-cover rounded-[20px]"
                    />
                  </AspectRatio>
                  <div className="md:block hidden h-full absolute top-0 w-full overflow-hidden rounded-[20px]">
                    <div className="h-full translate-y-full text-center w-full group-hover:-translate-y-0 transition-all duration-700 group-hover:bg-blue-50 group-hover:bg-opacity-50 px-10">
                      <p className="pt-2 lg:pt-10">{recipe.shortDescription}</p>
                    </div>
                  </div>
                </div>
                <div className="text-lg">{recipe.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RecipesPage;
