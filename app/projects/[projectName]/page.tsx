import prismadb from "@/lib/prismadb";
import DisplayProject from "../components/displayProject";
import { notFound } from "next/navigation";

const ProjectNamePage = async ({
  params,
}: {
  params: { projectName: string };
}) => {
  const projectName = params.projectName.replaceAll("-", " ");

  const project = await prismadb.project.findFirst({
    where: { title: { equals: projectName, mode: "insensitive" } },
    include: {
      projectImage: true,
      projectFeature: true,
    },
  });

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0 px-20">
      <DisplayProject project={project} />
    </main>
  );
};
export default ProjectNamePage;
