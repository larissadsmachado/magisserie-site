# Magisserie — site oficial
`npm install && npm run dev`

## Onde editar
- `src/lib/site.ts`: WhatsApp por região (`regions`), produtos/categorias (`categories`), Instagram, domínio, descrição.
- `public/brand/`: artes originais (redimensionadas só para web). `src/lib/assets.ts` guarda as dimensões.
- Nova página: criar `src/app/<nome>/page.tsx` e incluir em `nav`.

## Pendências (marcadas como [placeholder] no site)
WhatsApp de Recife e Aracaju · textos do Sobre · produtos/preços · descrição/SEO · domínio (`NEXT_PUBLIC_SITE_URL`) · (fontes: Fraunces nos títulos, Nunito no texto, via next/font).
