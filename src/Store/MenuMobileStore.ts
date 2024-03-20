import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IMenuMobileStoreState {
  isOpen: boolean;
  toggleMenuMobile: () => void;
}

export const useMenuMobileStore = create<IMenuMobileStoreState>()(
  persist(
    (set) => ({
      isOpen: false,
      toggleMenuMobile: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "menu-mobile-storage" }
  )
);
