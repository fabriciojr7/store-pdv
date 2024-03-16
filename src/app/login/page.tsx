import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-96 p-10 rounded-2xl bg-zinc-950 space-y-8">
        <Logo />

        <div>
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  );
}
