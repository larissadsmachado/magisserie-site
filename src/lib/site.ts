/**
 * Central de configuração da marca.
 * Tudo que é conteúdo (contatos, regiões, produtos, categorias) mora aqui,
 * para adicionar regiões, categorias ou produtos sem mexer nas páginas.
 */

export const site = {
  name: "Magisserie",
  instagram: "https://www.instagram.com/magisserie.atelie/",
  instagramHandle: "@magisserie.atelie",
  // TODO: preencher com o domínio real (ou definir NEXT_PUBLIC_SITE_URL)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO: descrição oficial da marca
  description: "Site oficial da Magisserie. [DESCRIÇÃO A DEFINIR]",
  fidelidadeUrl: "https://magisserie-fidelidade.larissadsmachado0.workers.dev/cartao",
};

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

export const nav: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/pedir", label: "Fazer pedido" },
  { href: "https://magisserie-fidelidade.larissadsmachado0.workers.dev/cartao", label: "Fidelidade", external: true },
];

export type Region = {
  id: string;
  name: string;
  /** Somente dígitos com DDI+DDD, ex.: "5581999999999". */
  whatsapp: string;
  message?: string;
};

export const DEFAULT_WHATSAPP_MESSAGE = "Olá! Vi o Instagram da Magisserie e gostaria de fazer um pedido!";

// Para adicionar uma região, basta incluir um item aqui.
export const regions: Region[] = [
  { id: "recife", name: "Recife", whatsapp: "5581983518988" },
  { id: "aracaju", name: "Aracaju", whatsapp: "557999960101" },
];

export const whatsappUrl = (r: Region) => {
  if (!r.whatsapp) return null;
  const digits = r.whatsapp.replace(/\D/g, "");
  const formattedDigits = digits.startsWith("55") ? digits : `55${digits}`;
  const text = r.message ?? DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${formattedDigits}?text=${encodeURIComponent(text)}`;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image?: { src: string; width: number; height: number };
  placeholder?: boolean;
};

export type Category = { id: string; name: string; products: Product[] };

export const categories: Category[] = [
  {
    id: "cookies",
    name: "Cookies",
    products: [
      {
        id: "cookie-tradicional",
        name: "Cookie tradicional",
        description: "Massa tradicional, gotas de chocolate ao leite",
        price: "R$ 10,00",
        image: {
          src: "/cardapio/Cookie tradicional.png",
          width: 1254,
          height: 1254,
        },
      },
      {
        id: "cookie-nutella",
        name: "Cookie com Nutella",
        description: "Massa tradicional, gotas de chocolate ao leite e recheio de avelã",
        price: "R$ 15,00",
        image: {
          src: "/cardapio/cookie nutella.png",
          width: 1254,
          height: 1254,
        },
      },
      {
        id: "cookie-kinder-bueno",
        name: "Cookie com Kinder Bueno",
        description: "Massa branca, gotas de chocolate ao leite, chocolate branco e creme bueno",
        price: "R$ 17,00",
        image: {
          src: "/cardapio/Cookie Kinder Bueno.png",
          width: 1254,
          height: 1254,
        },
      },
      {
        id: "cookie-red-velvet",
        name: "Cookie Red Velvet",
        description: "Massa de red velvet, gotas de chocolate branco e recheio de brigadeiro de cream cheese",
        price: "R$ 17,00",
        image: {
          src: "/cardapio/Cookie Red Velvet com Chocolate Branco.png",
          width: 1254,
          height: 1254,
        },
      },
      {
        id: "cookie-mirtilo",
        name: "Cookie de Mirtilo",
        description: "Massa de baunilha branca, gotas de chocolate branco, recheio de brigadeiro branco e geleia de mirtilo",
        price: "R$ 18,00",
        image: {
          src: "/cardapio/Cookie Mirtilo.png",
          width: 1254,
          height: 1254,
        },
      },
    ],
  },
];
