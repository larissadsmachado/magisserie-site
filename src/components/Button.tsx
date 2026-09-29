import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary: "bg-petroleo text-creme hover:bg-petroleo/90",
  secondary: "border-2 border-petroleo text-petroleo hover:bg-petroleo hover:text-creme",
  accent: "bg-pessego text-petroleo hover:bg-pessego/85",
};

type Props = { children: ReactNode; variant?: keyof typeof styles; href?: string; external?: boolean; className?: string };

export function Button({ children, variant = "primary", href, external, className = "" }: Props) {
  const cls = `inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-bold uppercase tracking-wide transition active:scale-[0.98] ${styles[variant]} ${className}`;
  if (!href)
    return (
      <span aria-disabled="true" className={`${cls} cursor-not-allowed opacity-50`}>
        {children}
      </span>
    );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-dashed border-petroleo/50 px-2 py-0.5 text-sm italic text-petroleo/70">
      {children}
    </span>
  );
}
