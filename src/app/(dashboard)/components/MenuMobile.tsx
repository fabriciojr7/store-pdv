"use client";

import { useMenuMobileStore } from "@/Store/MenuMobileStore";
import { ButtonToggleMenuMobile } from "@/components/ButtonToggleMenuMobile";
import { Logo } from "@/components/Logo";
import { UserIdentifier } from "@/components/UserIdentifier";
import clsx from "clsx";
import { CircleX, LogOut, Package, ShoppingBag } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function MenuMobile() {
  const menuMobileStore = useMenuMobileStore();

  const handleLogout = () => {
    signOut();
    menuMobileStore.toggleMenuMobile();
  };

  return (
    <div
      className={clsx(
        "absolute inset-0 flex flex-col gap-10 items-center justify-center bg-zinc-950 z-50",
        !menuMobileStore.isOpen && "!hidden"
      )}
    >
      <div className="w-full max-w-sm px-10 flex items-center justify-between">
        <Logo />
        <ButtonToggleMenuMobile>
          <CircleX />
        </ButtonToggleMenuMobile>
      </div>

      <UserIdentifier />

      <nav className="flex items-center flex-col gap-5 text-2xl font-bold *:flex *:items-center *:gap-2">
        <Link
          href={"/"}
          className="p-5 block"
          onClick={menuMobileStore.toggleMenuMobile}
        >
          <ShoppingBag />
          Catalogo
        </Link>

        <Link
          href={"/products"}
          className="p-5 block"
          onClick={menuMobileStore.toggleMenuMobile}
        >
          <Package />
          Produtos
        </Link>

        <button onClick={handleLogout}>
          <LogOut />
          Sair
        </button>
      </nav>
    </div>
  );
}
