"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="Hamburguer icon"
            width={30}
            height={30}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Logo showText />

          <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]">
            <section className="flex flex-col h-full gap-5 pt-12 text-white">
              {sidebarLinks.map(({ label, imgUrl, route }, i) => {
                const isActive =
                  pathname === route || pathname.startsWith(route + "/");

                return (
                  <SheetClose asChild key={i}>
                    <Link
                      href={route}
                      key={i}
                      className={cn(
                        "flex items-center justify-start gap-5 p-3.5 rounded-lg w-full max-w-60 hover:bg-muted-foreground/25 transition-colors hover:text-white",
                        {
                          "bg-blue-600 hover:bg-text-600 text-white": isActive,
                        }
                      )}
                    >
                      <Image src={imgUrl} alt={label} width={24} height={24} />
                      <p className="font-semibold">{label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
