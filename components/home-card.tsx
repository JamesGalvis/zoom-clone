"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  handleClick: () => void;
  iconSrc: string;
  title: string;
  description: string;
  className: string;
}

export function HomeCard({
  title,
  description,
  iconSrc,
  handleClick,
  className,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between xl:max-w-[270px] min-h-[260px] px-4 py-6 rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
        <Image src={iconSrc} alt="Meeting" width={25} height={25} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}
