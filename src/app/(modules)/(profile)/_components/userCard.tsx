import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dot } from "lucide-react";

import React from "react";
import CallActionButton from "./callActionButton";

const ProfileUserCard:React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-10 h-full w-full mb-5">
      <Avatar className="w-[150px] h-[150px]">
        <AvatarImage
          src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user"
          alt="user-image"
        ></AvatarImage>
        <AvatarFallback>ME</AvatarFallback>
      </Avatar>
      <h6 className="font-bold">Cody Fisher</h6>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Avatar className="w-6 h-6">
          <AvatarImage
            src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user"
            alt="user-image"
          ></AvatarImage>
        </Avatar>
        <p>Global SpaceX</p>
      </div>
      <span className="bg-gray-200 flex items-center rounded-full text-sm font-extralight text-gray-600 pl-1 pr-2 mt-2">
        <Dot className="text-green-600" />
        last Activity: 2days ago
      </span>
      <CallActionButton />
    </div>
  );
};

export default ProfileUserCard;
