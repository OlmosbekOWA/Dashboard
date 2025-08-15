import { CalendarOutlined, StarFilled } from "@ant-design/icons";
import myDashboard from "../../../public/my-dashboard.jpg"

export default function CardProject() {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow hover:shadow-lg transition p-4">
      {/* Image */}
      <div className="relative">
        <img
          src={myDashboard}
          alt="E-Commerce Dashboard"
          className="rounded-lg"
        />
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Completed
        </span>
      </div>

      {/* Title */}
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            E-Commerce Dashboard
          </h3>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <StarFilled className="text-yellow-400" />
            <span>150</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Modern admin dashboard for e-commerce management with real-time
          analytics, inventory tracking, and order management system.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {["React.js", "TypeScript", "Tailwind CSS", "Antd", "PostgreSQL"].map(
          (tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <CalendarOutlined />
          <span>08.08.2025</span>
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1 rounded-lg transition"
          >
            Demo
          </a>
          
        </div>
      </div>
    </div>
  );
}
