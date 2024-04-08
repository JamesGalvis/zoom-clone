import { MobileNav } from "@/components/mobile-nav";
import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full bg-dark-1 px-6 py-3 lg:px-10">
      <Logo />

      <div className="flex items-center justify-between gap-5">
        <UserButton />
        <MobileNav />
      </div>
    </nav>
  );
}
