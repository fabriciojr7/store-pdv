import { Logo } from "@/components/Logo";
import Link from "next/link";

export function MenuMobile() {
  return (
    <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center bg-zinc-950 z-50">
      <Logo />

      <nav className="flex flex-col gap-5 text-2xl font-bold">
        <Link href="/">Catalogo</Link>
        <Link href="/products">Produtos</Link>
        <button>Sair</button>
      </nav>
    </div>
  );
}
