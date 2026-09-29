import type { Metadata } from "next";
import Image from "next/image";
import { Placeholder } from "@/components/Button";
import { assets } from "@/lib/assets";

export const metadata: Metadata = { title: "Sobre", description: "Conheça a história da Magisserie." };

// TODO: substituir pelos textos/fotos oficiais quando forem fornecidos.
const blocos = ["História da marca", "Conceito", "Como a marca nasceu", "Fotos"];

export default function Sobre() {
  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      <Image {...assets.pergaminho} alt="" priority sizes="(min-width:768px) 480px, 100vw" className="h-auto w-full rounded-2xl" />
      <div className="space-y-6">
        <h1 className="text-3xl font-bold md:text-4xl">Sobre</h1>
        {blocos.map((b) => (
          <section key={b}>
            <h2 className="mb-1 text-xl font-bold">{b}</h2>
            <Placeholder>[Conteúdo a ser fornecido]</Placeholder>
          </section>
        ))}
        <Image {...assets.selo} alt="Selo de cera da Magisserie" className="h-auto w-32" />
      </div>
    </div>
  );
}
