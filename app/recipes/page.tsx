import { AspectRatio } from "@/components/ui/aspect-ratio";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import Link from "next/link";

const RecipesPage = async () => {
  const recipes = await prismadb.recipe.findMany({
    include: { RecipeImage: true },
  });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-24">
      <div className="text-center w-full">
        <h1 className="md:text-4xl text-2xl mb-4 font-bold">Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <Link
                href={`/recipes/${recipe.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <div className="relative block text-center group">
                  <AspectRatio ratio={1 / 1} className="w-full h-full relative">
                    <Image
                      src={recipe.RecipeImage[0].url}
                      fill
                      alt={recipe.title}
                      className="object-cover"
                    />
                  </AspectRatio>
                  <div className="h-full absolute top-0 block w-full overflow-hidden">
                    <div className="h-full translate-y-[90%] text-center w-full group-hover:-translate-y-0 transition-all duration-700 group-hover:bg-blue-50 group-hover:bg-opacity-50">
                      <p>{recipe.title}</p>
                      <p>
                        adaskdhaskjdhakjdhaskj adaskdhaskjdhakjdhaskjaskdjhas
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RecipesPage;
