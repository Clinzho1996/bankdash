"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-1">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="DCB logo"
            className="size-[34px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">BankDash.</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          const IconComponent = item.icon;

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-blue-1": isActive })}
            >
              <div className="relative size-6">
                <IconComponent
                  size={24}
                  className={cn("text-gray-400", {
                    "text-primary-3": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label text-gray-400", {
                  "text-primary-3 font-bold": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
