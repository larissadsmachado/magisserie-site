# 🪄 Magisserie

Site institucional e catálogo digital da **Magisserie** — confeitaria artesanal que une receitas feitas à mão com um toque de magia.

O projeto foi desenvolvido para oferecer uma experiência rápida, charmosa e intuitiva para os clientes conhecerem o cardápio e realizarem pedidos diretamente pelo WhatsApp de sua região.

---

## ✦ Funcionalidades

- 🏠 **Página Inicial**: Apresentação da marca, destaques e acessos rápidos aos pedidos e cardápio.
- 🍪 **Cardápio Digital**: Lista completa de produtos divididos por categorias, com fotos, descrições e preços atualizados.
- 📱 **Pedidos por Região (WhatsApp)**: Redirecionamento automático do cliente para o atendimento do WhatsApp correspondente à sua localização (Recife ou Aracaju), já com uma mensagem pré-formatada.
- 📱 **Interface Responsiva**: Navegação otimizada para computadores e celulares, contando com uma barra de navegação inferior exclusiva para dispositivos móveis.
- ✨ **Experiência Visual Interativa**: Microinterações e efeitos visuais nos botões e elementos interativos.

---

## 🎨 Identidade Visual & Design

- **Tipografia**: Uso da fonte *Fraunces* (estilo elegante e marcante) para títulos e *Nunito* para textos corridos.
- **Paleta de Cores**:
  - **Petróleo**: Cor primária para textos, bordas e destaques.
  - **Creme**: Fundo suave que remete a papéis artesanais e massas de doces.
  - **Pêssego**: Tom de destaque para botões e chamadas principais.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** — Framework React com App Router e otimização de imagens/fontes.
- **[React 18](https://react.dev/)** — Biblioteca para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança do código.
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária e responsiva.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### 1. Clonar o repositório e instalar as dependências
```bash
git clone https://github.com/larissamachado/magisserie.git
cd magisserie
npm install
```

### 2. Rodar o ambiente de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

### 3. Build de Produção
```bash
npm run build
npm run start
```

---

## 📁 Estrutura do Código

```text
magisserie/
├── public/
│   └── brand/          # Logotipos, artes e ícones da marca
├── src/
│   ├── app/            # Rotas do App Router (Home, Cardápio, Pedir)
│   ├── components/     # Componentes reutilizáveis (Botões, Navegação, etc.)
│   └── lib/            # Dados centrais (produtos, regiões, redes sociais, assets)
```
