"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-3 min-h-full w-fit  bg-dark-1 p-6 pt-28 text-neutral-300/80 max-sm:hidden lg:w-[264px]">
      {sidebarLinks.map(({ label, imgUrl, route }, i) => {
        const isActive = pathname === route || pathname.startsWith(route + "/");

        return (
          <Link
            href={route}
            key={i}
            className={cn(
              "flex items-center justify-start gap-4 p-3.5 rounded-lg hover:bg-muted-foreground/25  transition-colors hover:text-white",
              {
                "bg-blue-600 hover:bg-blue-600 text-white": isActive,
              }
            )}
          >
            <Image src={imgUrl} alt={label} width={24} height={24} />
            <p className="text-lg font-semibold max-lg:hidden">{label}</p>
          </Link>
        );
      })}
    </section>
  );
}
