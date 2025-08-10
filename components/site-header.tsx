"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { garamond, jetmono } from "@/lib/fonts";

const links = [
  { href: "/", label: "Início" },
  { href: "/work", label: "Trabalhos" },
  { href: "/photography", label: "Fotografia" },
  { href: "/music", label: "Música" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/60 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group inline-flex items-baseline gap-6">
          <span
            className={`${garamond.className} text-xl font-semibold text-neutral-100`}
          >
            Ezequias Lopes
          </span>
          <span
            className={`${jetmono.className} text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-amber-300 transition-colors`}
          >
            dev • foto • música
          </span>
        </Link>

        <nav
          aria-label="Primária"
          className="hidden md:flex items-center gap-6"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-amber-300"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5 text-neutral-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-neutral-900">
              <SheetHeader>
                <SheetTitle
                  className={`${garamond.className} text-neutral-100`}
                >
                  Navegação
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-3">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`py-2 text-base ${
                        active
                          ? "text-amber-300"
                          : "text-neutral-300 hover:text-neutral-100"
                      } transition-colors`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
