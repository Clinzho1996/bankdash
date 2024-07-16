import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface BankCardProps {
  balance: string;
  name: string;
  time: string;
  details: string;
  chipImage: string;
  typeImage: string;
  className: string;
  footerClassName: string;
  handleClick: () => void;
}
function BankCard({
  balance,
  name,
  time,
  details,
  chipImage,
  typeImage,
  className,
  footerClassName,
}: BankCardProps) {
  return (
    <div className={cn("rounded-3xl", className)}>
      <div className="flex flex-row pt-4 pl-4 pr-4  justify-between items-center gap-10">
        <div>
          <p className="text-[10px] font-light">Balance</p>
          <h2 className="text-[12px] font-semibold">${balance}</h2>
        </div>
        <div>
          <Image
            src={chipImage}
            width={10}
            height={10}
            alt="chip"
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>
      <div className="flex flex-row pt-4 pl-4 justify-between items-center gap-2 w-[90%]">
        <div>
          <p className="text-[10px]  font-light">CARD HOLDER</p>
          <h2 className="text-[12px] font-semibold">{name}</h2>
        </div>
        <div>
          <p className="text-[10px]  font-light">VALID THRU</p>
          <h2 className="text-[12px] font-semibold">{time}</h2>
        </div>
      </div>
      <div
        className={cn(
          "flex flex-row justify-between gap-5 mt-5 px-3 py-4 items-center mb-0",
          footerClassName
        )}
      >
        <div>
          <h2>{details}</h2>
        </div>
        <Image
          src={typeImage}
          width={8}
          height={6}
          className="w-[24px] h-[20px] object-contain"
          alt="type"
        />
      </div>
    </div>
  );
}

export default BankCard;
