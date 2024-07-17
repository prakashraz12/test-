import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User } from "lucide-react";
import ProfileContainer from "./profileContainer";

const Profile:React.FC = () => {
  return (
    <Tabs defaultValue="individual_view" className="p-0 h-full">
      <div className="flex justify-between items-center pt-4 pl-7 pr-7">
        <p className="text-xl font-bold mb-2">Leads</p>
        <TabsList className="bg-transparent">
          <TabsTrigger value="individual_view" className="flex gap-2">
            <User className="w-5" />
            Individual View
          </TabsTrigger>
          <TabsTrigger value="password" className="flex gap-2">
            <Building2 className="w-5" />
            Company View
          </TabsTrigger>
        </TabsList>
      </div>
      <hr className="mt-2" />
      <TabsContent value="individual_view" className="p-0 m-0 h-full">
        <ProfileContainer />
      </TabsContent>
      <TabsContent value="password">Company View</TabsContent>
    </Tabs>
  );
};

export default Profile;
