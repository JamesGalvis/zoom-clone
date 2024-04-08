import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col h-full">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <section className="flex-1 flex flex-col px-6 sm:px-14 overflow-y-auto">
          <div className="w-full pb-6 pt-28 max-md:pb-14">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout;
