"use server";

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendMessage(prevState: any, formData: FormData) {
  await new Promise((r) => setTimeout(r, 800));

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Informe seu nome.";
  if (!isEmail(email)) errors.email = "Informe um e-mail válido.";
  if (message.length < 10)
    errors.message = "A mensagem deve ter pelo menos 10 caracteres.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    message: "Obrigado! Sua mensagem foi enviada. Retornarei em breve.",
  };
}
