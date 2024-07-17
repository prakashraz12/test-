"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TopTableButtonProps {
  label: string;
}
const TopTableButton: React.FC<TopTableButtonProps> = ({ label }) => {
  return (
    <Button
      variant="ghost"
      className=" gap-2  p-0 text-sm  hover:bg-transparent"
    >
      {label}
      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );
};

export default TopTableButton;