import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./_components/Sidebar";

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
      <body className={`h-screen ${inter.className}`}>
        <div className="h-screen flex">
          <Sidebar />

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}