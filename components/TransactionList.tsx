import { transactionLinks } from "@/constants";
import React from "react";

function TransactionList() {
  return (
    <div className="bg-white p-4 rounded-3xl flex flex-col">
      {transactionLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            className="flex flex-row justify-between gap-2 items-center mt-2"
            key={item.id}
          >
            <div className="p-2 w-10 h-10 flex flex-row justify-center items-center rounded-full bg-blue-1">
              <IconComponent
                className="text-secondary-2 text-blue-2"
                size={24}
              />
            </div>
            <div className="flex flex-col gap-1 justify-start items-start w-[50%]">
              <p className="text-[12px] font-medium">{item.type}</p>
              <p className="text-[10px] text-gray-900 font-medium">
                {item.date}
              </p>
            </div>
            <p className="text-sm font-medium text-green-2">{item.amount}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionList;
