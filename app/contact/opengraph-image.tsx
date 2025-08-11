import Thumbnail from "@/components/thumbnail";

export default function OGImage() {
  return Thumbnail({
    title: "Contato",
    description:
      "Fale diretamente comigo sobre projetos, colaborações ou dúvidas.",
    route: ["contact"],
  });
}
