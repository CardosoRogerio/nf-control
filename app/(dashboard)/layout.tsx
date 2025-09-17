import Link from "next/link";
import { ReactNode } from "react";

const menu = [
  { label: "Dashboard", href: "/" },
  { label: "Notas", href: "/notas" },
  { label: "Nova Solicitação", href: "/nova" },
  { label: "Clientes", href: "/clientes" },
  { label: "Usuários", href: "/usuarios" }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4 space-y-2">
        {menu.map((item) => (
          <div
            key={item.href}
            className="p-2 hover:bg-gray-200 rounded cursor-pointer"
          >
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}