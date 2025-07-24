
import { useState } from "react";
import UsersInfo from "../components/ui/UsersInfo";
import { Outlet } from "react-router-dom";


export default function Users() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-white p-6 max-w-6xl mx-auto rounded-md shadow-md mt-10 flex justify-between">
      <UsersInfo showCard= {showCard} setShowCard={setShowCard} />

      <div className="mt-10">
        <Outlet />
          
      </div>
    </div>
  );
}
