import { CalendarOutlined, StarFilled } from "@ant-design/icons";

export default function CardProject({ project}:any) {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow hover:shadow-lg transition p-4">
      
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 right-2 text-white text-xs font-semibold px-3 py-1 rounded-full ${
            project.status === "Tugallangan"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <StarFilled className="text-yellow-400" />
            <span>{project.stars}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag:any) => (
          <span
            key={tag}
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <CalendarOutlined />
          <span>{project.date}</span>
        </div>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1 rounded-lg transition"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
