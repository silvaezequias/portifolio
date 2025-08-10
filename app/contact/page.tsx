"use client"

import { useActionState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import GrainBG from "@/components/grain-bg"
import { sendMessage } from "./actions"
import { garamond, jetmono } from "@/lib/fonts"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [state, formAction, isPending] = useActionState(sendMessage, null)

  const error = (state as any)?.errors || {}
  const ok = (state as any)?.ok

  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <GrainBG>
        <SiteHeader />
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-16 pb-20">
          <h1 className={`${garamond.className} text-3xl sm:text-4xl text-neutral-100`}>Contato</h1>
          <p className="mt-2 text-neutral-500 max-w-prose">
            Fale sobre sua ideia, projeto ou colaboração. Respondo o quanto antes.
          </p>

          <form action={formAction} className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-neutral-300">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome"
                className="bg-neutral-950 border-neutral-900 text-neutral-100 placeholder:text-neutral-600"
                aria-invalid={Boolean(error.name)}
                aria-describedby={error.name ? "name-error" : undefined}
              />
              {error.name && (
                <p id="name-error" className="text-xs text-amber-300">
                  {error.name}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-neutral-300">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="voce@exemplo.com"
                className="bg-neutral-950 border-neutral-900 text-neutral-100 placeholder:text-neutral-600"
                aria-invalid={Boolean(error.email)}
                aria-describedby={error.email ? "email-error" : undefined}
              />
              {error.email && (
                <p id="email-error" className="text-xs text-amber-300">
                  {error.email}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-neutral-300">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Conte-me sobre o que você precisa..."
                className="bg-neutral-950 border-neutral-900 text-neutral-100 placeholder:text-neutral-600"
                aria-invalid={Boolean(error.message)}
                aria-describedby={error.message ? "message-error" : undefined}
              />
              {error.message && (
                <p id="message-error" className="text-xs text-amber-300">
                  {error.message}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={isPending}
                className="bg-amber-300 text-black hover:bg-amber-200 disabled:opacity-70"
              >
                {isPending ? "Enviando..." : "Enviar mensagem"}
              </Button>
              {ok && (
                <p className={`${jetmono.className} text-[11px] uppercase tracking-widest text-amber-300`}>
                  {(state as any)?.message}
                </p>
              )}
            </div>
          </form>
        </section>
        <SiteFooter />
      </GrainBG>
    </main>
  )
}
