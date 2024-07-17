import { ChevronLeft } from "lucide-react";
import React from "react";
import { categoryList } from "./_config";
import CategoryTabs from "./_components/categoryTabs";

const CategoryContainer:React.FC = () => {
  return (
    <div className="w-full mt-2 border flex  rounded-md h-[525px] overflow-y-hidden">
      <section className="w-[200px] h-full border-r">
        <span className="flex justify-between p-5">
          <p className="text-sky-600 font-bold">Categories</p>
          <ChevronLeft className="text-sky-600" />
        </span>
        <ul className="flex flex-col gap-4 mt-1 w-full h-full">
          {categoryList.map((item, index) => (
            <li
              key={index}
              className={`font-[500] ${
                item.label === "Contact" && "bg-sky-100"
              } px-5 py-3`}
            >
              <span> {item.label}</span>
            </li>
          ))}
        </ul>
      </section>
      <CategoryTabs />
    </div>
  );
};

export default CategoryContainer;
