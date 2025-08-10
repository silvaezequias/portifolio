import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GrainBG from "@/components/grain-bg";
import { garamond, jetmono } from "@/lib/fonts";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center justify-center">
            <div>
              <h1
                className={`${garamond.className} text-3xl sm:text-4xl text-neutral-100`}
              >
                Sobre Mim
              </h1>
              <p
                className={`${jetmono.className} mt-3 text-neutral-400 max-w-prose text-justify`}
              >
                E aí! Eu sou o Ezequias Lopes, tenho 22 anos e trabalho na área
                de prevenção à fraude. Mesmo não sendo desenvolvedor
                formalmente, estou sempre criando automatizações para facilitar
                o serviço da equipe toda. Gosto de usar a tecnologia para tornar
                processos mais rápidos e simples para todo mundo.
                <br />
                <br /> Quando não estou mexendo com código ou automações, você
                me encontra com a câmera na mão buscando registrar paisagens e
                animais. Acho incrível conseguir capturar momentos que passam
                despercebidos no dia a dia, e a fotografia é meu jeito de
                guardar essas histórias visuais. <br />
                <br />
                Além disso, sou apaixonado por música. Contar histórias através
                de melodias é uma forma de expressar emoções que as palavras às
                vezes não conseguem. Seja tocando, compondo ou simplesmente
                ouvindo, a música conecta e inspira. <br />
                <br />
                No fim, sou um cara que curte misturar tecnologia, natureza e
                arte para tornar tudo mais interessante e com significado.
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/5] outline-dashed outline-offset-2 outline-2 outline-amber-300 overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950">
                <Image
                  src="/images/aboutme.jpg"
                  alt="Retrato de Ezequias"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </GrainBG>
    </main>
  );
}
