interface ProjectCardProps {
    name: string;
    type: string;
    color: string;
  }
  
  const ProjectCard = ({ name, type, color }: ProjectCardProps) => {
    return (
      <div className="w-full border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
        <div className="flex justify-between items-center mb-2">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            {name}
          </a>
          <span className="text-xs border rounded-full px-2 py-0.5 text-gray-600 bg-gray-100">
            Public
          </span>
        </div>
  
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${color}`}></span>
          <span className="text-sm text-gray-700">{type}</span>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  