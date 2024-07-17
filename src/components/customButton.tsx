import React from "react";

interface StepButtonProps {
  label: string;
  isFirst: boolean;
  isLast: boolean;
}
const StepButton: React.FC<StepButtonProps> = ({ label, isFirst, isLast }) => {
  return (
    <div
      className="relative flex items-center w-full justify-center"
      role="button"
    >
      <div
        className={` relative flex gap-3  items-center justify-center w-full  ${
          isFirst ? "cus-1" : isLast ? "cus-2" : "cus"
        }  px-8 py-4 ${
          label === "New"
            ? "bg-sky-200 text-sky-900 font-[500]"
            : "bg-slate-100"
        }`}
      >
        <p className="whitespace-nowrap"> {label}</p>
      </div>
    </div>
  );
};

interface ButtonProps {
  label: string;
}
interface CustomButtonGroupProps {
  buttons: ButtonProps[];
}
const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="flex">
      {buttons?.map((item, index) => (
        <StepButton
          key={index}
          label={item.label}
          isFirst={index === 0}
          isLast={index === buttons.length - 1}
        />
      ))}
    </div>
  );
};

export default CustomButtonGroup;
