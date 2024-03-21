import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/lib/query-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store PDV",
  description: "Seu terminal de vendas online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-zinc-900 text-zinc-100 ${inter.className}`}>
        <Provider>{children}</Provider>
        <ToastContainer position="bottom-center" />
      </body>
    </html>
  );
}
