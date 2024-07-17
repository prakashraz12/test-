import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExistingContact from "./existingContact";

const CategoryTabs:React.FC = () => {
  return (
    <Tabs defaultValue="oppertunity" className="w-full p-4">
      <TabsList className="bg-transparent">
        <TabsTrigger value="oppertunity">Opportunity Contacts</TabsTrigger>
        <TabsTrigger value="patner">Patner Contacts</TabsTrigger>
        <TabsTrigger value="team">Team Contacts</TabsTrigger>
      </TabsList>
      <TabsContent value="oppertunity">
      <ExistingContact/>
      </TabsContent>
      <TabsContent value="patner">partner comming soon</TabsContent>
      <TabsContent value="team">team comming soon</TabsContent>

    </Tabs>
  );
};

export default CategoryTabs;
