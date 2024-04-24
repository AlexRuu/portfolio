import Header from "@/components/ui/header";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Projects`,
    description: "Some of my personal projects.",
  };
};

const ProjectsPage = () => {
  return (
    <div>
      <Header title="Projects" />
    </div>
  );
};

export default ProjectsPage;
