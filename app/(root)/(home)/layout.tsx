import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col h-full">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <section className="flex-1 flex flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout;
