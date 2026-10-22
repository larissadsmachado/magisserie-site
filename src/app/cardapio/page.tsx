import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { assets } from "@/lib/assets";
import { categories } from "@/lib/site";

export const metadata: Metadata = { title: "Cardápio", description: "Conheça os produtos da Magisserie." };

export default function Cardapio() {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Cardápio</h1>
      {categories.map((c) => (
        <section key={c.id} id={c.id} aria-labelledby={`h-${c.id}`} className="mt-8">
          <h2 id={`h-${c.id}`} className="mb-4 text-2xl font-bold">{c.name}</h2>
          {c.products.length === 0 ? (
            <p className="italic text-petroleo/70">[Produtos em breve]</p>
          ) : (
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {c.products.map((p) => (
                <li key={p.id} className="flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-petroleo bg-white/50">
                  <div>
                    <Image
                      {...(p.image ?? assets.cookie)}
                      alt={p.name}
                      sizes="(min-width:768px) 300px, 50vw"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="p-3">
                      <h3 className={`font-bold ${p.placeholder ? "italic text-petroleo/70" : ""}`}>{p.name}</h3>
                      {p.description && <p className="text-sm italic text-petroleo/70">{p.description}</p>}
                    </div>
                  </div>
                  {p.price && (
                    <div className="px-3 pb-3">
                      <p className="font-bold text-petroleo">{p.price}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <div className="mt-10 flex justify-center"><Button href="/pedir">Fazer pedido</Button></div>
    </>
  );
}
