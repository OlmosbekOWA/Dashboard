import ProjectCard from "../ui/ProjectCard";

const GitHubProjects = () => {
  return (
    <div className="w-full flex flex-col gap-5">
        <div className="w-full flex justify-between gap-5 flex-col md:flex-row">
            <ProjectCard name="entertainment-web-app-full-web-site-OlmosbekOWA" type="TypeScript" color="bg-blue-500"  link={"https://vermillion-alfajores-06d35f.netlify.app"}/>
            <ProjectCard name="my-progect" type="TypeScript" color="bg-blue-500" link={"https://my-progect-rho.vercel.app"} />
        </div>
        <div className="w-full flex justify-between gap-5 flex-col md:flex-row">
            <ProjectCard name="ReduxTodo" type="TypeScript" color="bg-blue-500" link={"https://stunning-nasturtium-cd869d.netlify.app"} />
            <ProjectCard name="Planets" type="JavaScript" color="bg-red-500" link={"https://transcendent-pavlova-2223c8.netlify.app"} />
        </div>
        <div className="flex justify-between gap-5 flex-col md:flex-row">
            <ProjectCard name="Countres" type="JavaScript" color="bg-yellow-400" link={"https://idyllic-daffodil-c9b8d3.netlify.app"} />
            <ProjectCard name="Weather" type="TypeScript" color="bg-blue-500" link={"https://wathe.netlify.app"} />
        </div>
    </div>
  );
};

export default GitHubProjects;
