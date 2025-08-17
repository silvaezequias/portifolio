"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { Button } from "@/components/ui/button";
import { garamond, jetmono } from "@/lib/fonts";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 pb-32">
          <div className="text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/10 ring-1 ring-amber-300/30 mb-6">
              <Search className="h-8 w-8 text-amber-300" />
            </div>

            <p
              className={`${jetmono.className} text-[11px] uppercase tracking-widest text-neutral-500`}
            >
              Erro 404
            </p>
            <h1
              className={`${garamond.className} mt-3 text-5xl sm:text-7xl leading-tight text-neutral-100`}
            >
              Página não encontrada
            </h1>
            <p className="mt-6 text-lg text-neutral-400 max-w-prose mx-auto">
              A página que você está procurando não existe ou foi movida. Talvez
              você tenha digitado o endereço errado?
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="bg-amber-300 text-black hover:bg-amber-200"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao início
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-neutral-800 text-neutral-300 hover:bg-neutral-900 bg-transparent"
              >
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Página anterior
                </Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="rounded-lg border border-neutral-900 bg-neutral-950/40 p-4">
                <h3 className="text-neutral-100 font-medium">Trabalhos</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Veja meus projetos de desenvolvimento e design.
                </p>
                <Link
                  href="/work"
                  className="mt-2 text-sm text-amber-300 hover:text-amber-200 inline-block"
                >
                  Ver trabalhos →
                </Link>
              </div>
              <div className="rounded-lg border border-neutral-900 bg-neutral-950/40 p-4">
                <h3 className="text-neutral-100 font-medium">Sobre</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Conheça mais sobre minha trajetória e filosofia.
                </p>
                <Link
                  href="/about"
                  className="mt-2 text-sm text-amber-300 hover:text-amber-200 inline-block"
                >
                  Sobre mim →
                </Link>
              </div>
              <div className="rounded-lg border border-neutral-900 bg-neutral-950/40 p-4">
                <h3 className="text-neutral-100 font-medium">Contato</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Entre em contato para projetos e colaborações.
                </p>
                <Link
                  href="/contact"
                  className="mt-2 text-sm text-amber-300 hover:text-amber-200 inline-block"
                >
                  Falar comigo →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </GrainBG>
    </main>
  );
}
