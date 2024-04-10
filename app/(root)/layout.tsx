import { StreamVideoProvider } from "@/providers/stream-client-provider";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

export default RootLayout;
