import { Sidebar } from "@/components/Sidebar";

export default function DashobardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
