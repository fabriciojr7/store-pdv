import { LogOut, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Sidebar() {
  return (
    <div className="flex flex-col justify-between pb-4 bg-zinc-950 h-screen">
      <div className="h-24 flex items-center justify-center border-b border-zinc-900/80">
        <Logo />
      </div>

      <nav className="[&_svg]:size-8 [&_li]:flex [&_li]:items-center [&_li]:justify-center px-4">
        <ul>
          <li className="hover:text-primary hover:bg-zinc-900 rounded-lg">
            <Link className="p-5 block" href="/">
              <ShoppingBag />
            </Link>
          </li>

          <li className="hover:text-primary hover:bg-zinc-900 rounded-lg">
            <Link className="p-5 block" href="/products">
              <Package />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center">
        <button className="hover:text-red-500 hover:bg-zinc-900 p-5 rounded-lg">
          <LogOut />
        </button>
      </div>
    </div>
  );
}
