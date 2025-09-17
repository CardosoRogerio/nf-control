export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}