import { useState } from "react";
import UsersInfo from "../components/ui/UsersInfo";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "../routs";

export default function Users() {
  const [showCard, setShowCard] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-white p-3 max-w-[1216px] mx-auto rounded-md shadow-md mt-10 flex flex-col gap-5 md:flex-row md:gap-10">
      {/* Chap tomonda Users Info */}
      <UsersInfo showCard={showCard} setShowCard={setShowCard} />

      
      <div className="flex-1">
        
      <div className="flex gap-6 border-b text-sm font-medium mb-4 overflow-x-auto whitespace-nowrap">
        {routes.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-2 px-2 py-1 relative ${
                isActive
                  ? "border-b-2 border-blue-500 text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.icons}
              <span>{item.title}</span>

              {item.badge && (
                <span className="ml-1 text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

        {/* Outlet */}
        <div className="mt-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
