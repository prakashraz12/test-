import CustomButton from "@/components/customButton";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";
import React from "react";
import CategoryContainer from "./categoryContainer";
import { buttons } from "./_config";

const UserChildrenContainer: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full p-3 h-full">
      <div className="bg-white p-5 rounded-sm border">
        <div className="flex justify-between items-end mb-4">
          <span>
            <p className="font-bold">Deal Stage</p>
            <p className="mt-2">Start Date:21 June 2024</p>
          </span>
          <span className="text-sm font-bold">Close Date: 20 july 2024</span>
        </div>
        <CustomButton buttons={buttons} />
        <div className="flex justify-between items-center mt-3">
          <span className="flex">
            <p className="flex gap-2">
              Move Stage:New <ChevronDown className="w-4" />
            </p>
          </span>
          <span className="flex items-center gap-3">
            <Button className="flex bg-sky-600 gap-2 p-2">
              <Plus />
              Convert
            </Button>
            <Button className="flex bg-sky-600 gap-2">MArk as Completed</Button>
          </span>
        </div>
      </div>
      <div className="w-full bg-white rounded-sm">
        <CategoryContainer />
      </div>
    </div>
  );
};

export default UserChildrenContainer;
