import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
}

export function Logo({ showText = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/icons/logo.svg"
        alt="Zoom logo"
        width={32}
        height={32}
        className="max-sm:size-10"
      />
      <p className="text-[26px] font-extrabold text-white max-sm:hidden">
        Zoom
      </p>
      {showText && (
        <p className="text-[24px] font-extrabold text-white">Zoom</p>
      )}
    </Link>
  );
}
