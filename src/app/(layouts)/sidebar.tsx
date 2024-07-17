import { sideBarMenus } from "@/_config";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Sidebar:React.FC = () => {
  return (
    <>
      <section className="w-[200px]  bg-sky-600 py-5 px-5 sticky top-0">
        <div className="flex justify-end">
          <ChevronLeft className="text-white" />
        </div>
        <ul>
          {sideBarMenus.map((item, index) => (
            <li key={index} className="flex gap-3 mt-10 text-white">
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
