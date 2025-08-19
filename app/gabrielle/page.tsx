import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { garamond, jetmono } from "@/lib/fonts";
import { Heart, Sparkles, Music } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />

        {/* Hero romântico */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-amber-300 animate-pulse" />
              <p
                className={`${jetmono.className} text-[11px] uppercase tracking-widest text-neutral-500`}
              >
                Para minha diva icônica
              </p>
              <Heart className="h-4 w-4 text-amber-300 animate-pulse" />
            </div>

            <h1
              className={`${garamond.className} text-5xl sm:text-7xl leading-tight text-neutral-100 mb-6`}
            >
              Gabrielle G. Rojas
            </h1>

            <p className="text-xl text-amber-300/90 max-w-2xl mx-auto leading-relaxed">
              "Em cada linha de código que escrevo, em cada foto que capturo, em
              cada nota que componho você está presente, inspirando beleza e
              felicidade."
              <br />
              <sub>
                <i>obs: nenhum texto aqui foi feito com chatgpt</i>
              </sub>
            </p>
          </div>
        </section>

        {/* Galeria de momentos */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Foto principal */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="relative aspect-[3/3] overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 group">
                <Image
                  src="/images/nossos-momentos.png"
                  alt="Nossos momentos especiais"
                  fill
                  className="object-cover transition-transform duration-700 rotate-270 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className={`${garamond.className} text-2xl text-white mb-2`}
                  >
                    Nossos momentos
                  </p>
                  <p className="text-neutral-300 text-sm">
                    Cada segundo ao seu lado é uma memória que vou guardar para
                    sempre
                  </p>
                </div>
                {/* Corações flutuantes */}
                <div className="absolute top-4 right-4 opacity-70">
                  <Heart
                    className="h-6 w-6 text-amber-300 animate-bounce"
                    style={{ animationDelay: "0s" }}
                  />
                </div>
                <div className="absolute top-12 right-12 opacity-50">
                  <Heart
                    className="h-4 w-4 text-amber-300 animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
            </div>

            {/* Fotos menores */}
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950 group">
                <Image
                  src="/images/nosso-sorriso.png"
                  alt="Seu sorriso"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p
                    className={`${jetmono.className} text-[10px] uppercase tracking-widest text-amber-300`}
                  >
                    Nosso sorriso
                  </p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950 group">
                <Image
                  src="/images/entrelacados.png"
                  alt="Nossas mãos entrelaçadas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p
                    className={`${jetmono.className} text-[10px] uppercase tracking-widest text-amber-300`}
                  >
                    Entrelaçados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de frases românticas */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-16">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Sparkles className="h-5 w-5 text-amber-300/60" />
              </div>
              <blockquote
                className={`${garamond.className} text-xl text-neutral-100 leading-relaxed mb-4`}
              >
                "Você é a pessoa mais incrível que apareceu na minha vida,
                transformou todo o cinza em cor no instante que sorriu pra mim
                naquela farmácia."
              </blockquote>
              <p
                className={`${jetmono.className} text-[10px] uppercase tracking-widest text-neutral-500`}
              >
                Com todo nosso amor e cor
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Music className="h-5 w-5 text-amber-300/60" />
              </div>
              <blockquote
                className={`${garamond.className} text-xl text-neutral-100 leading-relaxed mb-4`}
              >
                "Tudo de bom pra nós, hoje sempre, amém! Nosso lema que
                levaremos para o resto da vida, juntos, sempre."
              </blockquote>
              <p
                className={`${jetmono.className} text-[10px] uppercase tracking-widest text-neutral-500`}
              >
                Para sempre nós
              </p>
            </div>
          </div>
        </section>

        {/* Seção final com efeito especial */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Heart className="h-32 w-32 text-amber-300" />
            </div>
            <div className="relative z-10 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-12 backdrop-blur-sm">
              <div className="flex justify-center gap-2 mb-6">
                <Heart
                  className="h-3 w-3 text-amber-300 animate-pulse"
                  style={{ animationDelay: "0s" }}
                />
                <Heart
                  className="h-3 w-3 text-amber-300 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <Heart
                  className="h-3 w-3 text-amber-300 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>

              <h2
                className={`${garamond.className} text-3xl sm:text-4xl text-neutral-100 mb-6`}
              >
                Te amo infinitamente
              </h2>

              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Gabrielle, para mim você não é apenas um webber, você é
                simplesmente metade da minha vida. Eu te amo te eu
                incondicionalmente e sempre estarei aqui para você, em todos os
                momentos, sejam bons ou ótimos :)
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2 text-amber-300">
                  <Heart className="h-4 w-4 fill-current" />
                  <span
                    className={`${jetmono.className} text-[11px] uppercase tracking-widest`}
                  >
                    Ezequias para Gabrielle
                  </span>
                  <Heart className="h-4 w-4 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </GrainBG>
    </main>
  );
}
