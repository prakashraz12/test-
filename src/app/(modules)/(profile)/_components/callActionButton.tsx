import React, { ReactElement } from "react";
import { actionButtons } from "../_config";

interface ButtonProviderProps {
  icon: ReactElement;
  label: string;
}
const ButtonProvider: React.FC<ButtonProviderProps> = ({ icon, label }) => {
  return (
    <div className=" text-gray-400 text-sm flex flex-col justify-center gap-2 items-center">
      <span className="w-10 h-10 flex justify-center items-center border border-gray-400 rounded-full">
        {icon}
      </span>
      <p>{label}</p>
    </div>
  );
};

const CallActionButton: React.FC = () => {
  return (
    <div className="flex items-center gap-4 mt-5">
      {actionButtons.map((item, index) => (
        <ButtonProvider icon={item.icon} label={item.label} key={index} />
      ))}
    </div>
  );
};

export default CallActionButton;
