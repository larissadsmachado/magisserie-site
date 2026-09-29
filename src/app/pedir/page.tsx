import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { assets } from "@/lib/assets";
import { regions, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Fazer pedido", description: "Escolha sua região para continuar o pedido pelo WhatsApp." };

export default function Pedir() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
      <Image {...assets["pergaminho"]} alt="" className="h-auto w-40 rounded-2xl" priority />
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">Onde você está?</h1>
        <p className="mt-2">Escolha sua região para continuar o pedido.</p>
      </div>
      <ul className="grid w-full gap-4">
        {regions.map((r) => {
          const url = whatsappUrl(r);
          return (
            <li key={r.id} className="rounded-2xl border-2 border-petroleo bg-white/50 p-5">
              <h2 className="mb-4 text-2xl font-bold">{r.name}</h2>
              <Button href={url ?? undefined} external variant="accent" className="w-full">
                Pedir pelo WhatsApp
              </Button>
              {!url && <p className="mt-2 text-sm italic text-petroleo/70">[Número de {r.name} a ser informado]</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
