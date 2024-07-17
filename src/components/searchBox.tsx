import { Search } from "lucide-react";
import React from "react";

const SearchBox: React.FC = () => {
    return (
        <div className="flex p-2 border  rounded-md items-center gap-3 w-[400px]">
            <Search className="w-6"/>
            <input type="text" placeholder="Search" className="outline-none border-none text-sm w-full"/>
            <div className="flex gap-1">
                <span className="px-1 py-1 bg-gray-200 rounded-md text-sm">⌘</span>
                <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">F</span>
            </div>
        </div>
    );
};

export default SearchBox;
