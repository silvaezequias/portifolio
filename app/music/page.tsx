import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import ComingSoon from "@/components/coming-soon";
import { garamond } from "@/lib/fonts";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezequias - Música",
  description: "Projetos musicais autorais, minimalistas e experimentais.",
};

const tracks = [
  {
    title: "Estudo I — Sombra",
    note: "Piano e texturas ambientais",
    status: "Em breve",
  },
  {
    title: "Rua às 3AM",
    note: "Synth analógico, fita e respirações",
    status: "Em breve",
  },
  {
    title: "Carta sem Endereço",
    note: "Violão, ruído e espaço",
    status: "Em breve",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-20">
          <h1
            className={`${garamond.className} text-3xl sm:text-4xl text-neutral-100`}
          >
            Música
          </h1>
          <p className="mt-2 text-neutral-500 max-w-prose">
            Composições minimalistas. Entre silêncio, repetição e sentimento.
          </p>

          <ComingSoon label="Em breve">
            <div className="mt-10 grid gap-4">
              {tracks.map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-950/50 p-4"
                >
                  <div className="w-full max-w-sm">
                    <Skeleton className="h-4 w-40 bg-neutral-900/70" />
                    <Skeleton className="mt-2 h-3 w-64 bg-neutral-900/60" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-16 rounded-full bg-neutral-900/70" />
                    <Skeleton className="h-5 w-5 rounded-full bg-neutral-900/70" />
                  </div>
                </div>
              ))}
            </div>
          </ComingSoon>

          <p className="mt-6 text-sm text-neutral-500">
            Em breve: players integrados e lançamentos no Spotify/Apple Music.
          </p>
        </section>
        <SiteFooter />
      </GrainBG>
    </main>
  );
}
