import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown } from "lucide-react";

const UserProfileToggler = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p>Dana Morris</p>
      <ChevronDown />
    </div>
  );
};

export default UserProfileToggler;
