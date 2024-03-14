import Link from "next/link";

export function Sidebar() {
  return (
    <div>
      Logo
      <nav>
        <ul>
          <li>
            <Link href="/">Catalogo</Link>
          </li>
          <li>
            <Link href="/products">Produtos</Link>
          </li>
        </ul>
      </nav>
      <button>Sair</button>
    </div>
  );
}
