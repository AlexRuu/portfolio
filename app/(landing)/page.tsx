// @ts-nocheck

import HomeDisplay from "@/app/(landing)/components/home-display";
import prismadb from "@/lib/prismadb";
import BelowDisplay from "./components/below-display";

const HomePage = async () => {
  const images = await prismadb.images.findMany({
    where: { width: 6000 },
    orderBy: { id: "asc" },
  });

  const gallery = await prismadb.images.findFirst({
    orderBy: { createdAt: "desc" },
  });

  const project = await prismadb.project.findFirst({
    include: { projectImage: true },
    orderBy: { createdAt: "desc" },
  });

  const recipe = await prismadb.recipe.findFirst({
    include: { RecipeImage: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-20">
      <div className="flex flex-col">
        <HomeDisplay images={images} />
        <BelowDisplay gallery={gallery} project={project} recipe={recipe} />
      </div>
    </main>
  );
};

export default HomePage;
