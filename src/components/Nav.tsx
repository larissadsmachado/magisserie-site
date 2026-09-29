"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

const isActive = (path: string, href: string) => (href === "/" ? path === "/" : path.startsWith(href));

export function DesktopNav() {
  const path = usePathname();
  return (
    <nav aria-label="Principal" className="hidden gap-8 md:flex">
      {nav.map((i) => (
        <Link key={i.href} href={i.href} aria-current={isActive(path, i.href) ? "page" : undefined}
          className={`font-bold underline-offset-8 hover:underline ${isActive(path, i.href) ? "underline decoration-pessego decoration-4" : ""}`}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav() {
  const path = usePathname();
  return (
    <nav aria-label="Principal (celular)" className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-petroleo bg-creme pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="grid grid-cols-4">
        {nav.map((i) => {
          const active = isActive(path, i.href);
          return (
            <li key={i.href}>
              <Link href={i.href} aria-current={active ? "page" : undefined}
                className={`flex min-h-14 items-center justify-center px-1 text-center text-sm font-bold leading-tight ${active ? "bg-petroleo text-creme" : ""}`}>
                {i.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
