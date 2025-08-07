import ProjectCard from "../ui/ProjectCard";

const GitHubProjects = () => {
  return (
    <div className="w-full flex flex-col gap-5">
        <div className="w-full flex justify-between gap-5 flex-col md:flex-row">

            <ProjectCard name="Countres" type="JavaScript" color="bg-yellow-400" />
            <ProjectCard name="Dashboard" type="TypeScript" color="bg-blue-500" />
        </div>
        <div className="w-full flex justify-between gap-5 flex-col md:flex-row">
            <ProjectCard name="js-project" type="JavaScript" color="bg-red-500" />
            <ProjectCard name="my-progect" type="TypeScript" color="bg-blue-500" />
        </div>
        <div className="flex justify-between gap-5 flex-col md:flex-row">
            <ProjectCard name="reduxTodoList" type="TypeScript" color="bg-blue-500" />
            <ProjectCard name="Weather" type="TypeScript" color="bg-blue-500" />
        </div>
    </div>
  );
};

export default GitHubProjects;
