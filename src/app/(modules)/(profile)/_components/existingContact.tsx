import { Button } from "@/components/ui/button";
import React from "react";
import ContactCard from "./contactCard";

const ExistingContact:React.FC = () => {
  return (
    <div>
      <span className="flex justify-between items-center mt-3 ">
        <p className="font-bold">Eixting Contacts</p>
        <Button className="bg-sky-600">Create new contact</Button>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-scroll h-[450px] w-full">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
  
      </div>
    </div>
  );
};

export default ExistingContact;
