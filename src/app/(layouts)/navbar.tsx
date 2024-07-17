import React from "react";
import SearchBox from "../../components/searchBox";
import { Bell, CircleHelp } from "lucide-react";
import UserProfileToggler from "@/components/userProfileToggler";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="flex justify-between px-10 py-6">
        <div>
          <SearchBox />
        </div>
        <div className="flex  gap-10">
          <ul className="flex gap-10 items-center">
            <li className="flex gap-2 text-sm">
              <Bell className="w-5" /> Notifaction
            </li>
            <li className="flex gap-2 text-sm">
              <CircleHelp className="w-5" /> Help Center
            </li>
          </ul>
          <UserProfileToggler />
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
