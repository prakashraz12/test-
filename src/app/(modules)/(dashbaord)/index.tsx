import React from "react";
import SearchInput from "./searchInput";
import ActionBar from "./actionBar";
import { TableDemo } from "@/components/table/page";

const DashBoard:React.FC = () => {
  return (
    <div className="p-10 py-2">
      <div className="flex w-full justify-between">
      <SearchInput />
      <ActionBar />
      </div>
      <TableDemo/>
    </div>
  );
};

export default DashBoard;
