import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { garamond, jetmono } from "@/lib/fonts";
import { ArrowUpRight, Shield, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ActiveMembers from "@/components/nexteam/active-members";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipe NEXTEAM®",
  description: "Faça parte do time competitivo NEXTEAM® de FPS.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="justify-self-center">
              <div className="relative aspect-square w-80 sm:w-96 rounded-xl border border-neutral-900 bg-neutral-950/60 ring-1 ring-neutral-900/60">
                <Image
                  src="/images/nexteam-logo.png"
                  alt="logo da NEXTEAM®"
                  fill
                  sizes="(min-width: 1024px) 24rem, 20rem"
                  className="object-contain p-6 drop-shadow-[0_0_24px_rgba(255,255,255,0.06)]"
                  priority
                />
              </div>
            </div>
            <div>
              <p
                className={`${jetmono.className} text-[11px] uppercase tracking-widest text-neutral-500`}
              >
                Time competitivo de FPS
              </p>
              <h1
                className={`${garamond.className} text-5xl sm:text-5xl text-neutral-100`}
              >
                <span>NEXTEAM</span>
                <sup className="text-2xl">®</sup>
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-neutral-800 text-neutral-400"
                >
                  FPS
                </Badge>
                <Badge
                  variant="outline"
                  className="border-neutral-800 text-neutral-400"
                >
                  CS2
                </Badge>
                <Badge
                  variant="outline"
                  className="border-neutral-800 text-neutral-400"
                >
                  Zula Global
                </Badge>
              </div>
              <ActiveMembers inviteCode="rtf6KPJddA" />

              <p className="mt-5 max-w-prose text-neutral-400 text-justify">
                Faça parte da <b>Equipe NEXTEAM®</b> que é um time competitivo
                de FPS, focado em Counter‑Strike 2, Valorant e Zula Global.
                Nossa proposta é competitividade com respeito, treinos
                consistentes e evolução coletiva, mantendo comunicação clara e
                espírito de equipe em todas as filas.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-amber-300 text-black hover:bg-amber-200"
                >
                  <a
                    href="https://discord.gg/rtf6KPJddA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrar no Discord
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-neutral-800 text-neutral-300 hover:bg-neutral-900 bg-transparent"
                >
                  <Link href="/contact">Falar com a liderança</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-neutral-900 bg-neutral-950/50 p-4">
              <Target className="h-5 w-5 text-amber-300" />
              <h3 className="mt-2 text-neutral-100">Treinos e metas</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Rotina de scrims e reviews, foco em aim, granadas e táticas de
                time.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-900 bg-neutral-950/50 p-4">
              <Users className="h-5 w-5 text-amber-300" />
              <h3 className="mt-2 text-neutral-100">Comunidade</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Ambiente acolhedor, sem toxicidade. Comunicação objetiva em
                partidas.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-900 bg-neutral-950/50 p-4">
              <Shield className="h-5 w-5 text-amber-300" />
              <h3 className="mt-2 text-neutral-100">Respeito e fair play</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Regras claras, respeito aos adversários e zero tolerância à
                trapaça.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </GrainBG>
    </main>
  );
}
