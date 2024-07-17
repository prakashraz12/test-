import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CircleArrowOutUpRight,
  EllipsisVertical,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactCard:React.FC = () => {
  return (
    <div className="rounded-md border px-4 py-7 mt-2">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="absolute bg-white border rounded-full p-1 left-8  bottom-0">
              <CircleArrowOutUpRight className="w-2 h-2" />
            </div>
          </div>
          <div>
            <p className="font-[500]">Code Fisher</p>
            <span className="flex gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4" />
              Austin
            </span>
          </div>
        </div>
        <div className=" flex justify-end">
          <EllipsisVertical className="w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <span className="flex gap-2">
          <Mail className="text-muted-foreground w-4" />
          <p className="text-sm font-bold underline">codefisher@gmail.com</p>
        </span>
        <span className="flex gap-2">
          <Phone className="text-muted-foreground w-4" />
          <p className="text-sm font-bold text-muted-foreground">
            (671)55-0110
          </p>
        </span>
        <div className="flex gap-2">
          <Button
            className="flex w-full border-2 items-center gap-2 border-gray-700"
            variant={"outline"}
          >
            <Phone className="w-4" />
            Call
          </Button>
          <Button
            className="flex w-full border-2 items-center gap-2 border-gray-700"
            variant={"outline"}
          >
            <Mail className="w-4" />
            Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
