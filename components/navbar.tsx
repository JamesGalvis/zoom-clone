import { MobileNav } from "@/components/mobile-nav";
import { Logo } from "@/components/logo";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Logo />

      <div className="flex items-center justify-between gap-5">
        <MobileNav />
      </div>
    </nav>
  );
}
