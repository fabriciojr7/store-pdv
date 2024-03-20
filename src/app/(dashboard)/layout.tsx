import { Sidebar } from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { MenuMobile } from "./components/MenuMobile";

export default async function DashobardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="h-screen flex">
      <MenuMobile />

      <Sidebar />

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
