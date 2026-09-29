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
};

export const nav = [
  { href: "/", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/pedir", label: "Fazer pedido" },
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
      { id: "cookie-tradicional", name: "Cookie tradicional", price: "R$ 10,00" },
      { id: "cookie-nutella", name: "Cookie com Nutella", price: "R$ 15,00" },
      { id: "cookie-kinder-bueno", name: "Cookie com Kinder Bueno", price: "R$ 17,00" },
    ],
  },
];
