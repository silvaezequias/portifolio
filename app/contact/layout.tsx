import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezequias - Contato",
  description:
    "Fale diretamente comigo sobre projetos, colaborações ou dúvidas.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
