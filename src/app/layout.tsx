import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import { DesktopNav, MobileNav } from "@/components/Nav";
import { assets } from "@/lib/assets";
import { nav, site } from "@/lib/site";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, siteName: site.name, locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#fef7ef" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:z-30 focus:bg-creme focus:p-3">Ir para o conteúdo</a>
        <header className="sticky top-0 z-10 border-b-2 border-petroleo/15 bg-creme/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" aria-label="Magisserie, página inicial">
              <Image {...assets.nome} alt="Magisserie" className="h-9 w-auto" priority />
            </Link>
            <DesktopNav />
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4">
              Instagram
            </a>
          </div>
        </header>
        <main id="conteudo" className="mx-auto max-w-5xl px-5 pb-28 pt-8 md:pb-16">{children}</main>
        <footer className="hidden border-t-2 border-petroleo/15 md:block">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-sm">
            <Image {...assets.gato} alt="" className="h-10 w-auto" />
            <ul className="flex gap-6">{nav.map((i) => <li key={i.href}><Link href={i.href} className="hover:underline">{i.label}</Link></li>)}</ul>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">{site.instagramHandle}</a>
          </div>
        </footer>
        <MobileNav />
      </body>
    </html>
  );
}
