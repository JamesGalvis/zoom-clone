function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden min-h-full py-4 flex items-center justify-center">
      {children}
    </main>
  );
}

export default AuthLayout;
