"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

const isActive = (path: string, href: string) => (href === "/" ? path === "/" : path.startsWith(href));

export function DesktopNav() {
  const path = usePathname();
  return (
    <nav aria-label="Principal" className="hidden gap-8 md:flex">
      {nav.map((i) =>
        i.external ? (
          <a
            key={i.href}
            href={i.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline-offset-8 hover:underline"
          >
            {i.label}
          </a>
        ) : (
          <Link
            key={i.href}
            href={i.href}
            aria-current={isActive(path, i.href) ? "page" : undefined}
            className={`font-bold underline-offset-8 hover:underline ${isActive(path, i.href) ? "underline decoration-pessego decoration-4" : ""}`}
          >
            {i.label}
          </Link>
        )
      )}
    </nav>
  );
}

export function MobileNav() {
  const path = usePathname();
  return (
    <nav aria-label="Principal (celular)" className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-petroleo bg-creme pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="grid" style={{ gridTemplateColumns: `repeat(${nav.length}, minmax(0, 1fr))` }}>
        {nav.map((i) => {
          const active = !i.external && isActive(path, i.href);
          const className = `flex min-h-14 items-center justify-center px-1 text-center text-sm font-bold leading-tight ${active ? "bg-petroleo text-creme" : ""}`;
          return (
            <li key={i.href}>
              {i.external ? (
                <a href={i.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {i.label}
                </a>
              ) : (
                <Link href={i.href} aria-current={active ? "page" : undefined} className={className}>
                  {i.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
