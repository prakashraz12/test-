import { Search } from "lucide-react";
import React from "react";

const SearchInput:React.FC = () => {
  return (
    <div className="flex items-center px-4 py-2 border rounded-md  gap-2 w-[400px]">
      <Search className="w-5" />
      <input type="text" placeholder="Search" className="outline-none border-none text-sm w-full" />
    </div>
  );
};

export default SearchInput;
