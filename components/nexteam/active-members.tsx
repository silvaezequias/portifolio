"use client";

import { useEffect, useRef, useState } from "react";
import { garamond, jetmono } from "@/lib/fonts";
import { Users } from "lucide-react";

type Props = {
  inviteCode?: string;
  className?: string;
};

function format(n: number | null) {
  if (n == null) return "—";
  try {
    return new Intl.NumberFormat("pt-BR").format(n);
  } catch {
    return String(n);
  }
}

export default function ActiveMembers({
  inviteCode = "rtf6KPJddA",
  className = "",
}: Props) {
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [display, setDisplay] = useState<number | null>(null);
  const lastValue = useRef<number>(0);

  async function load() {
    try {
      const res = await fetch(
        `/api/discord-invite?code=${encodeURIComponent(inviteCode)}`,
        { cache: "no-store" }
      );
      const json = await res.json();
      if (json?.ok) {
        const next =
          typeof json.memberCount === "number" ? json.memberCount : null;
        setTotal(next);
        setError(null);
      } else {
        setError(json?.error ?? "Erro ao buscar membros");
      }
    } catch (e: any) {
      setError(e?.message ?? "Erro ao buscar membros");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted) await load();
    })();
    const id = setInterval(() => {
      if (mounted) load();
    }, 60_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [inviteCode]);

  useEffect(() => {
    if (total == null) return;
    const start = performance.now();
    const from = lastValue.current || 0;
    const to = total;
    const duration = 2000;

    function step(t: number) {
      const e = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - e, 3);
      const value = Math.round(from + (to - from) * eased);
      setDisplay(value);
      if (e < 1) {
        requestAnimationFrame(step);
      } else {
        lastValue.current = to;
      }
    }
    requestAnimationFrame(step);
  }, [total]);

  return (
    <section className={`mt-6 ${className}`} aria-live="polite">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 p-6 ring-1 ring-neutral-900/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 opacity-40"
          style={{
            background:
              "radial-gradient(80% 60% at 10% 10%, rgba(251, 191, 36, 0.12), transparent 60%), radial-gradient(60% 40% at 100% 0%, rgba(251, 191, 36, 0.06), transparent 60%)",
          }}
        />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-300/70 via-amber-300/30 to-transparent" />

        <div className="relative flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/10 ring-1 ring-amber-300/30">
            <Users className="h-6 w-6 text-amber-300" />
          </span>
          <div className="flex flex-col">
            <span
              className={`${jetmono.className} text-[11px] uppercase tracking-widest text-neutral-500`}
            >
              Membros ativos
            </span>
            <span
              className={`${garamond.className} text-5xl sm:text-6xl leading-none text-neutral-100 tabular-nums tracking-tight`}
            >
              {loading ? (
                <span className="inline-block h-10 w-24 animate-pulse rounded bg-neutral-800" />
              ) : error ? (
                "—"
              ) : (
                format(display)
              )}
            </span>
          </div>
        </div>
        <p className="relative mt-3 text-xs text-neutral-500">
          Contagem atual de jogadores ativos do NEXTEAM®
        </p>
      </div>
    </section>
  );
}

ActiveMembers.defaultProps = {
  inviteCode: "rtf6KPJddA",
  className: "",
};
