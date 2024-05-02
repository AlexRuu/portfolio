import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Project = Prisma.ProjectGetPayload<{
  include: {
    projectFeature: true;
    projectImage: true;
  };
}>;

interface DisplayProjectProps {
  project: Project;
}

const DisplayProject: React.FC<DisplayProjectProps> = ({ project }) => {
  return (
    <div className="w-full">
      <div className="w-full mb-10 flex justify-center flex-nowrap pt-12">
        <Link
          href={project.url}
          className="font-medium text-3xl flex mb-4 uppercase hover:before:scale-x-100 relative before:w-full before:h-[2px] before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0"
        >
          {project.title}
        </Link>
      </div>
      <div className="flex w-full lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:pr-2 w-full">
          <AspectRatio ratio={6 / 4}>
            <Link href={project.url}>
              <Image
                src={project.projectImage[0].url}
                alt={project.title}
                width={1024}
                height={768}
                className="rounded-[20px] object-contain"
              />
            </Link>
          </AspectRatio>
        </div>
        <div className="lg:w-1/2 lg:pl-2 w-full">
          <div className="w-full">
            <h1 className="uppercase text-lg font-semibold text-center lg:text-left">
              Description
            </h1>
            <p className="py-2">{project.description}</p>
          </div>
          <div className="w-full">
            <h1 className="uppercase text-lg font-semibold text-center lg:text-left">
              Features
            </h1>
            <ul className="py-1">
              {project.projectFeature.map((feature) => (
                <li key={feature.id} className="list-disc ml-4">
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProject;
