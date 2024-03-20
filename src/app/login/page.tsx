import { Logo } from "@/components/Logo";
import { ButtonLogin } from "./components/ButtonLogin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-96 p-10 rounded-2xl bg-zinc-950 space-y-8">
        <Logo />

        <ButtonLogin />
      </div>
    </div>
  );
}
