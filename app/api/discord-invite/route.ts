export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code") ?? "rtf6KPJddA";

  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${encodeURIComponent(
        code
      )}?with_counts=true&with_expiration=true`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return Response.json(
        { ok: false, error: `Discord API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    const payload = {
      ok: true,
      code,
      name: data?.guild?.name ?? null,
      memberCount: data?.approximate_member_count ?? null,
      onlineCount: data?.approximate_presence_count ?? null,
      expiresAt: data?.expires_at ?? null,
    };

    return Response.json(payload, { status: 200 });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
