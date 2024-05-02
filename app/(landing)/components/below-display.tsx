"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Image = Prisma.ImagesGetPayload<{}>;
type Project = Prisma.ProjectGetPayload<{ include: { projectImage: true } }>;
type Recipe = Prisma.RecipeGetPayload<{ include: { RecipeImage: true } }>;

interface BelowDisplayProps {
  gallery: Image;
  project: Project;
  recipe: Recipe;
}

const BelowDisplay: React.FC<BelowDisplayProps> = ({
  gallery,
  project,
  recipe,
}) => {
  const categories = [
    {
      title: "Gallery",
      href: "/gallery",
      image: gallery.url,
    },
    {
      title: "Projects",
      href: "/projects",
      image: project.projectImage[0].url,
    },
    { title: "Recipes", href: "/recipes", image: recipe.RecipeImage[0].url },
  ];

  return (
    <div className="block relative mt-5">
      <div className="w-full">
        <div className="w-full text-center justify-center items-center">
          <h1 className="font-semibold uppercase mb-3 text-2xl">
            Latest Posts
          </h1>
        </div>
        <div className="flex w-full min-h-[500px] lg:flex-row flex-col">
          {categories.map((category) => (
            <div
              key={category.title}
              className="lg:w-1/3 w-full lg:mx-5 rounded-[20px] lg:mb-0 mb-10 justify-center text-center"
            >
              <Link
                href={category.href}
                className="block relative overflow-hidden touch-manipulation rounded-[20px] mb-2"
              >
                <div
                  className="h-auto w-full block"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                    <div className="pt-[100%] relative rounded-[20px]">
                      <Image
                        src={category.image}
                        fill
                        alt=""
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="absolute top-0 left-0 max-w-full rounded-[20px] hover:scale-110 transition ease-in-out duration-300"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={category.href}
                className="text-xl mt-5 uppercase w-full"
              >
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelowDisplay;
