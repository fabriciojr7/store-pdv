"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export function UserIdentifier() {
  const { data } = useSession();

  return (
    <div className="flex items-center gap-2">
      {data?.user && (
        <Image
          src={data.user.image ?? ""}
          width={24}
          height={24}
          className="rounded-full"
          alt={`Avatar ${data.user.name}`}
        />
      )}

      {data?.user && (
        <span className="text-sm font-bold">{data.user.name}</span>
      )}
    </div>
  );
}
