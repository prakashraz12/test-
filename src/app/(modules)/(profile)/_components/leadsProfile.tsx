import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Mail, Phone } from "lucide-react";
import React from "react";

const LeadsProfile:React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex gap-2 items-center">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-sm">Cody Fisher</p>
      </span>
      <span className="flex gap-2 items-center">
        <Phone className="w-5 text-muted-foreground" />
        <p className="font-bold text-sm">(848) 221 2999</p>
          </span>
          <span className="flex gap-2 items-center">
        <Mail className="w-5 text-muted-foreground" />
        <p className="font-bold text-sm underline">robertfox@gmail.com</p>
      </span>
    </div>
  );
};

export default LeadsProfile;
