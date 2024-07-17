import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import React from "react";

const ActionBar:React.FC = () => {
  return (
    <div className="flex gap-4 items-start">
      <Button className="flex items-center gap-2">
        <Upload className="w-5" />
        Export Lead
      </Button>
      <Button className="flex items-center gap-2">
        <Plus className="w-5" />
        Add Leads
      </Button>
    </div>
  );
};

export default ActionBar;
