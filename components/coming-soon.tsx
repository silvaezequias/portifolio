import type { ReactNode } from "react";
import { jetmono } from "@/lib/fonts";

type ComingSoonProps = {
  label?: string;
  children?: ReactNode;
  className?: string;
};

export default function ComingSoon({
  label = "Em breve",
  children,
  className = "",
}: ComingSoonProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-10 pt-27 flex items-start justify-center"
        aria-hidden="true"
      >
        <span
          className={`${jetmono.className} rounded-full border border-neutral-800 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-widest text-amber-300 backdrop-blur`}
        >
          {label}
        </span>
      </div>
      <div
        aria-disabled="true"
        className="pointer-events-none opacity-50 blur-[1px]"
      >
        {children}
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

ComingSoon.defaultProps = {
  label: "Em breve",
  children: null,
  className: "",
};
