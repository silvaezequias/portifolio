import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { garamond } from "@/lib/fonts";
import ComingSoon from "@/components/coming-soon";
import { Skeleton } from "@/components/ui/skeleton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezequias - Fotografia",
  description: "Projetos autorais de fotografia, arte e cinema.",
};

const photos = Array.from({ length: 3 }).map((_, i) => ({
  src: `/placeholder.svg?height=${i % 3 === 0 ? 900 : 1200}&width=${
    i % 3 === 0 ? 700 : 800
  }&query=moody%20street%20photography%20bw%20grain%20film%20${i + 1}`,
  alt: `Foto ${i + 1} - rua e sombra`,
}));

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-20">
          <h1
            className={`${garamond.className} text-3xl sm:text-4xl text-neutral-100`}
          >
            Fotografia
          </h1>
          <p className="mt-2 text-neutral-500 max-w-prose">
            Pretos profundos, luz baixa, silêncio entre passos. Retratos e rua.
          </p>

          <ComingSoon label="Em breve">
            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
              {photos.map((_, idx) => {
                const heights = [260, 320, 380, 300, 340, 420];
                const h = heights[idx % heights.length];
                return (
                  <div
                    key={idx}
                    className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950"
                  >
                    <Skeleton
                      className="w-full bg-neutral-900/70"
                      style={{ height: h }}
                    />
                  </div>
                );
              })}
            </div>
          </ComingSoon>
        </section>
        <SiteFooter />
      </GrainBG>
    </main>
  );
}
