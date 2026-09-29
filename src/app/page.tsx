import Image from "next/image";
import Link from "next/link";
import { Button, Placeholder } from "@/components/Button";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

const cards = [
  { href: "/pedir", title: "Fazer pedido", img: assets["bola-de-cristal"] },
  { href: "/cardapio", title: "Cardápio", img: assets.cookie },
  { href: "/sobre", title: "Sobre", img: assets.pergaminho },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="sr-only">Magisserie</h1>
        <Image {...assets.logo} alt="Magisserie: bruxinha de chapéu petróleo e cabelo alaranjado" priority className="w-64 sm:w-80 md:w-96 h-auto" />
        <p><Placeholder>[Chamada principal — texto a definir]</Placeholder></p>
        <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button href="/pedir" variant="primary">Fazer pedido</Button>
          <Button href="/cardapio" variant="secondary">Ver cardápio</Button>
        </div>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">
          Siga no Instagram · {site.instagramHandle}
        </a>
      </section>

      <section aria-label="Explore" className="mt-14 grid grid-cols-3 gap-3 md:gap-6">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="group block overflow-hidden rounded-2xl border-2 border-petroleo">
            <Image {...c.img} alt="" sizes="(min-width:768px) 300px, 33vw" className="h-auto w-full transition group-hover:scale-105" />
            <span className="block bg-petroleo py-2 text-center text-sm font-bold text-creme md:text-base">{c.title}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
