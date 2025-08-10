import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { projects } from "@/app/util/projects";
import { jetmono } from "@/lib/fonts";

export function Projects(prop: { amount?: number }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {projects
        .slice(
          0,
          (prop.amount || Infinity) > projects.length
            ? projects.length
            : prop.amount
        )
        .map((p) => (
          <Link
            key={p.title}
            href={p.href}
            target="_blank"
            className="group overflow-hidden rounded-xl border border-neutral-900 bg-neutral-950"
          >
            <div className="relative flex h-56 w-full bg-neutral-950">
              {p.imageQuery ? (
                <Image
                  src={p.imageQuery}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 scale-[0.7] group-hover:scale-[1.02]"
                />
              ) : (
                <span
                  className={`${jetmono.className} w-full h-full transition-transform duration-500 text-center flex justify-center items-center text-[40px] font-semibold group-hover:scale-[1.3]`}
                >
                  {p.name}
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-neutral-800 text-neutral-400"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <h3 className="mt-3 text-neutral-100">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">{p.description}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
