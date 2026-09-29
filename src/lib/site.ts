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
  { href: "/sobre", label: "Sobre" },
];

export type Region = {
  id: string;
  name: string;
  /** Somente dígitos com DDI+DDD, ex.: "5581999999999". Vazio = ainda não informado. */
  whatsapp: string;
};

// Para adicionar uma região, basta incluir um item aqui.
export const regions: Region[] = [
  { id: "recife", name: "Recife", whatsapp: "" }, // TODO: número de Recife
  { id: "aracaju", name: "Aracaju", whatsapp: "" }, // TODO: número de Aracaju
];

export const whatsappUrl = (r: Region) => (r.whatsapp ? `https://wa.me/${r.whatsapp}` : null);

export type Product = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image?: { src: string; width: number; height: number };
  placeholder?: boolean;
};

export type Category = { id: string; name: string; products: Product[] };

// Para uma nova categoria, basta incluir um item aqui.
// Nomes reais; descrição e preço ainda são placeholders. Adicione `image` quando houver foto do produto.
export const categories: Category[] = [
  {
    id: "cookies",
    name: "Cookies",
    products: [
      { id: "cookie-tradicional", name: "Cookie tradicional" },
      { id: "cookie-nutella", name: "Cookie com Nutella" },
      { id: "cookie-kinder-bueno", name: "Cookie com Kinder Bueno" },
    ].map((p) => ({ ...p, description: "[Descrição a ser fornecida]", price: "[Preço]" })),
  },
];
