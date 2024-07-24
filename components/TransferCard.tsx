import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IconBrandTelegram } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function TransferCard() {
  return (
    <div className="bg-white px-4 py-12 rounded-lg w-full">
      <div className="flex flex-row flex-wrap justify-center items-center text-center gap-5 md:gap-10 mb-8">
        <div className="flex flex-col justify-center items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-10 h-10 rounded-full md:w-14 md:h-14"
            />
            <AvatarFallback className="w-10 h-10 p-3 md:w-14 md:h-14  bg-gray-800 font-bold rounded-full text-gray-900">
              DC
            </AvatarFallback>
          </Avatar>
          <p className="text-gray-600 font-medium text-md md:text-lg">
            Ayomide
          </p>
          <p className="text-gray-400 font-light text-[10px] md:text-sm">
            Babe
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-10 h-10 rounded-full md:w-14 md:h-14"
            />
            <AvatarFallback className="w-10 h-10 p-3 md:w-14 md:h-14  bg-gray-800 font-bold rounded-full text-gray-900">
              DC
            </AvatarFallback>
          </Avatar>
          <p className="text-gray-600 font-medium text-md md:text-lg">Joye</p>
          <p className="text-gray-400 font-light text-[10px] md:text-sm">Sis</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-10 h-10 rounded-full md:w-14 md:h-14"
            />
            <AvatarFallback className="w-10 h-10 p-3 md:w-14 md:h-14  bg-gray-800 font-bold rounded-full text-gray-900">
              DC
            </AvatarFallback>
          </Avatar>
          <p className="text-gray-600 font-medium text-md md:text-lg">
            RuttieQ
          </p>
          <p className="text-gray-400 font-light text-[10px] md:text-sm">Sis</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-10 h-10 rounded-full md:w-14 md:h-14"
            />
            <AvatarFallback className="w-10 h-10 p-3 md:w-14 md:h-14  bg-gray-800 font-bold rounded-full text-gray-900">
              DC
            </AvatarFallback>
          </Avatar>
          <p className="text-gray-600 font-medium text-md md:text-lg">Wizzy</p>
          <p className="text-gray-400 font-light text-[10px] md:text-sm">Bro</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-5 w-full items-center gap-5">
        <div className="w-full md:w-[35%]">
          <p className="text-gray-400 font-light text-sm">Write Amount</p>
        </div>
        <div className="flex flex-row justify-between w-full md:w-[65%] gap-0">
          <Input
            placeholder="525.50"
            className="bg-gray-800 border-none rounded-full px-5 py-7"
          />
          <Button className="bg-primary-3 text-white px-2 md:px-5 py-7 rounded-full ml-[-50px]">
            Send <IconBrandTelegram />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TransferCard;
