const ProjectNamePage = async ({
  params,
}: {
  params: { projectName: string };
}) => {
  const projectName = params.projectName.replaceAll("-", " ");

  return <div></div>;
};

export default ProjectNamePage;
