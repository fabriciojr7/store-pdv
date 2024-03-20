"use client";

import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";

export function ButtonLogin() {
  const handleLoginClick = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return <Button onClick={handleLoginClick}>Entrar com Google</Button>;
}
