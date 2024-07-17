import React from "react";
import ProfileUserCard from "./_components/userCard";
import OtherLeads from "./otherLeads";
import UserChildrenContainer from "./userChildrenContainer";

const ProfileContainer:React.FC = () => {
  return (
    <div className="flex">
      <section className="w-[340px] border-r h-full">
        <div>
          <ProfileUserCard />
          <hr />
          <OtherLeads />
        </div>
      </section>
      <UserChildrenContainer />
    </div>
  );
};

export default ProfileContainer;
