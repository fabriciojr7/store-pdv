import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "@/interfaces/IProduct";

type ProductCartType = {
  product: IProduct;
  quantity?: number | 1;
};

interface ICartState {
  cart: ProductCartType[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  isOpen: boolean;
  toggleCart: () => void;
}

export const useCartStore = create<ICartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const productIndex = state.cart.findIndex(
            (prod) => prod.product.id === item.id
          );

          if (productIndex !== -1) {
            const updatedCart = [...state.cart];

            updatedCart[productIndex] = {
              ...updatedCart[productIndex],
              quantity: (updatedCart[productIndex].quantity || 1) + 1,
            };

            return { ...state, cart: updatedCart };
          } else {
            return {
              ...state,
              cart: [...state.cart, { product: item, quantity: 1 }],
            };
          }
        }),
      removeFromCart: (item) =>
        set((state) => {
          const productIndex = state.cart.findIndex(
            (prod) => prod.product.id === item.id
          );

          if (productIndex !== -1 && state.cart[productIndex].quantity! > 1) {
            const updatedCart = [...state.cart];

            updatedCart[productIndex] = {
              ...updatedCart[productIndex],
              quantity: (updatedCart[productIndex].quantity || 1) - 1,
            };

            return { ...state, cart: updatedCart };
          } else {
            const filteredCart = state.cart.filter(
              (prod) => prod.product.id !== item.id
            );

            return {
              cart: filteredCart,
            };
          }
        }),
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "cart-storage" }
  )
);
