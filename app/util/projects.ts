export type Project = {
  name: string;
  title: string;
  description: string;
  imageQuery: string | undefined;
  href: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "SecureDB",
    title: "SecureDB - Banco de dados seguro e intuitivo",
    description:
      "SecureDB é um banco de dados local rápido e seguro para Node.js, com suporte a múltiplas instâncias e criptografia avançada.",
    href: "https://github.com/silvaezequias/secure-db",
    imageQuery: undefined,
    tags: ["Node.js", "Banco de Dados", "Criptografia"],
  },
  {
    name: "NextFastAPI",
    title: "NextFastAPI - Controlador de API leve para Next.js",
    description:
      "NextFastAPI é um controlador leve para criar APIs estruturadas no Next.js com middlewares e erros integrados.",
    href: "https://github.com/silvaezequias/nextfastapi",
    imageQuery: undefined,
    tags: ["Next.js", "Api", "Controller", "Middleware"],
  },
  {
    name: "NextKeyboard",
    title: "NextKeyboard - Gerenciador de eventos de teclado",
    description:
      "NextKeyboard é uma biblioteca para React e JS/TS que simplifica o gerenciamento de eventos e combinações de teclas.",
    href: "https://github.com/silvaezequias/nextkeyboard",
    imageQuery: undefined,
    tags: ["React", "JavaScript", "TypeScript", "Keyboard Events"],
  },
  {
    name: "LemmeEncode",
    title: "LemmeEncode - Biblioteca de codificação de dados",
    description:
      "LemmEncode é uma biblioteca simples que codifica e decodifica strings usando chave secreta, sal aleatório e saída em Base64.",
    href: "https://github.com/silvaezequias/lemmencode",
    imageQuery: undefined,
    tags: ["Node.js", "Codificação", "Segurança", "Criptografia"],
  },
  {
    name: "Fastiscord",
    title: "Fastiscord - Criar bots de Discord com facilidade",
    description:
      "Fastiscord é um handler moderno para Discord.js em TypeScript que carrega comandos e eventos automaticamente usando uma convenção simples de nomes de arquivos.",
    href: "https://github.com/silvaezequias/fastiscord-ts/",
    imageQuery: undefined,
    tags: ["Discord.js", "TypeScript", "Bot", "Handler"],
  },
  {
    name: "GranularAC",
    title: "GranularAC - Controle de Acesso Granular",
    description:
      "GranularAC é uma biblioteca TypeScript para controle de acesso granular em Node.js, baseada em permissões de ação, recurso e escopo.",
    href: "https://github.com/silvaezequias/granular-ac",
    imageQuery: undefined,
    tags: ["Node.js", "Controle de Acesso", "TypeScript", "Segurança"],
  },
  {
    name: "Tabnews Discord Bot",
    title: "Tabnews Discord Bot",
    description:
      "Bot em TypeScript que integra a API do TabNews ao Discord, requerendo Node.js e configuração.",
    href: "https://github.com/silvaezequias/tabnews-discord-bot",
    imageQuery: undefined,
    tags: ["Discord.js", "TypeScript", "Bot", "API", "TabNews"],
  },
  {
    name: "Gerenciador de Convidados",
    title: "Gerenciador de Convidados",
    description:
      "Aplicação web para organizar pessoas em adultos e crianças por idade configurável, com adição, remoção e exportação em PDF.",
    href: "https://github.com/silvaezequias/gerenciador-de-convidados",
    imageQuery: undefined,
    tags: ["React", "Next.js", "TypeScript", "PDF"],
  },
];
