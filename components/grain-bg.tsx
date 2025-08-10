"use client";

import type * as React from "react";

type GrainBGProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function GrainBG({ children, className = "" }: GrainBGProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/images/noise.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
        }}
      />
      {children}
    </div>
  );
}

GrainBG.defaultProps = {
  children: null,
  className: "",
};
