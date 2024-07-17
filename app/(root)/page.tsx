import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import TransactionList from "@/components/TransactionList";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <HeaderBox title="Overview" />
      <div className="py-4 bg-gray-800 flex flex-col md:flex-row px-10 justify-between items-start w-full">
        <div className="flex flex-col gap-5 w-[100%] md:w-[65%] justify-between items-start">
          <div className="flex flex-row gap-5 w-[100%] justify-between items-start">
            <div>
              <h2 className="text-primary-2 text-lg md:text-xl font-semibold">
                My Cards
              </h2>
            </div>

            <div>
              <a
                href="/credit-cards"
                className="text-primary-2 font-semibold text-sm"
              >
                View All
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
            <BankCard
              className="bg-primary-3 text-white w-[100%] md:w-[50%]"
              balance="5,756"
              name="Confidence Emonena"
              time="12/28"
              details="3778 **** **** 1234"
              typeImage="/master2.png"
              chipImage="/chip.png"
              footerClassName="bg-[#ffffff20]"
              handleClick={() => {}}
            />
            <BankCard
              className="bg-white border-[1px] w-[100%] md:w-[50%]"
              balance="10,264"
              name="Ochuko Emonena"
              time="07/26"
              details="6297 **** **** 0832"
              typeImage="/master.png"
              chipImage="/chip2.png"
              footerClassName="bg-[#dfeaf2] rounded-b-3xl rounded-br-3xl"
              handleClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%] sm:w-[32%] mt-5 md:mt-0">
          <h2 className="text-primary-2 text-lg md:text-xl font-semibold">
            Recent Transaction
          </h2>
          <div className="mt-5">
            <TransactionList />
          </div>
        </div>
      </div>
    </section>
  );
}
