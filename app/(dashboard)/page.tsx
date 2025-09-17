import { Card } from "@/components/ui/card";
import Link from "next/link";

const cards = [
  { label: "Total de Solicitações", href: "/notas" },
  { label: "Solicitação Aberta - Comercial", href: "/notas?status=criada" },
  { label: "Retorno do Saldo - Qualidade", href: "/notas?status=estoque" },
  { label: "Aguardando Refaturamento", href: "/notas?status=aguardando" },
  { label: "Concluído", href: "/notas?status=refaturada" },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Link key={card.href} href={card.href}>
          <Card className="p-6 text-center cursor-pointer hover:shadow-lg">
            <p className="font-semibold">{card.label}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}