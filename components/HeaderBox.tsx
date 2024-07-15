import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IconBellRinging, IconSearch, IconSettings } from "@tabler/icons-react";
import React from "react";
import { Input } from "@/components/ui/input";

function HeaderBox({ title }: HeaderBoxProps) {
  return (
    <div className="bg-white flex flex-row justify-between px-10 py-4 items-center border-b-[1px] border-gray-200">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="hidden flex-row justify-between gap-8 items-center md:flex">
        <div className="px-3 py-1 flex flex-row gap-3 bg-gray-800 rounded-3xl items-center">
          <IconSearch className="text-gray-900" size={20} />
          <Input
            placeholder="Search for something"
            className="p-0 bg-transparent text-gray-900 font-inter border-none"
          />
        </div>
        <div className="p-3 bg-gray-800 rounded-full">
          <IconSettings className="text-gray-900" size={20} />
        </div>
        <div className="p-3  bg-gray-800 rounded-full">
          <IconBellRinging className="text-gray-900" size={20} />
        </div>
        <div>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-12 h-12 rounded-full"
            />
            <AvatarFallback>DC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default HeaderBox;
