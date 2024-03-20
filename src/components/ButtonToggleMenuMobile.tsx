"use client";
import { useMenuMobileStore } from "@/Store/MenuMobileStore";

export function ButtonToggleMenuMobile({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuMobileStore = useMenuMobileStore();

  return <button onClick={menuMobileStore.toggleMenuMobile}>{children}</button>;
}
