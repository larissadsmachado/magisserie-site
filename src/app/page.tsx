import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

const cards = [
  { href: "/pedir", title: "Fazer pedido", img: assets["pergaminho"] },
  { href: "/cardapio", title: "Cardápio", img: assets.cookie },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="sr-only">Magisserie</h1>
        <Image {...assets.logo} alt="Magisserie: bruxinha de chapéu petróleo e cabelo alaranjado" priority className="w-64 sm:w-80 md:w-96 h-auto" />
        {/* Sugestão de chamada; editar livremente. */}
        <p className="max-w-xs font-display text-2xl leading-snug sm:max-w-md sm:text-3xl">
          Feito à mão, com um toque de magia.
        </p>
        <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button href="/pedir" variant="primary">Fazer pedido</Button>
          <Button href="/cardapio" variant="secondary">Ver cardápio</Button>
          <Button href={site.fidelidadeUrl} external variant="accent">Cartão Fidelidade</Button>
        </div>
      </section>

      <section aria-label="Explore" className="mt-14 mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:gap-6">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="group block overflow-hidden rounded-2xl border-2 border-petroleo">
            <Image {...c.img} alt="" sizes="(min-width:768px) 380px, 50vw" className="h-auto w-full transition group-hover:scale-105" />
            <span className="block bg-petroleo py-2 text-center text-sm font-bold text-creme md:text-base">{c.title}</span>
          </Link>
        ))}
      </section>

      <section aria-label="Cartão Fidelidade" className="mt-10 mx-auto max-w-2xl rounded-2xl border-2 border-petroleo bg-white/60 p-6 text-center sm:p-8">
        <div className="mx-auto mb-3 flex justify-center">
          <Image {...assets.selo} alt="" className="h-16 w-auto" />
        </div>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Cartão Fidelidade</h2>
        <p className="mt-2 text-base text-petroleo/80 sm:text-lg">
          Consulte seus selos mágicos acumulados e resgate seus doces!
        </p>
        <div className="mt-5">
          <Button href={site.fidelidadeUrl} external variant="accent">
            Ver meu Cartão Fidelidade
          </Button>
        </div>
      </section>
    </>
  );
}
