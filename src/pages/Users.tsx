
import { useState } from "react";
import UsersInfo from "../components/ui/UsersInfo";
import { Outlet } from "react-router-dom";


export default function Users() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-white p-6 max-w-[1216px] mx-auto rounded-md shadow-md mt-10 flex gap-10">
      <UsersInfo showCard= {showCard} setShowCard={setShowCard} />

      <div className="mt-10 w-full">
        <Outlet />
          
      </div>
    </div>
  );
}
