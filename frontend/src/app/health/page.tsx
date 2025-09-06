async function getHealth(): Promise<{ status: string; ok: boolean; error?: string }> {
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
  try {
    const res = await fetch(`${base}/api/v1/health`, { cache: 'no-store' });
    if (!res.ok) return { status: 'error', ok: false };
    const json = (await res.json()) as { status: string };
    return { status: json.status, ok: true };
  } catch (err: unknown) {
    return { status: 'error', ok: false, error: (err as Error).message };
  }
}

export default async function HealthPage() {
  const health = await getHealth();
  return (
    <div className="stack">
      <h1>Health</h1>
      <div className="card">
        <p>
          Backend URL: <code>{process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'}</code>
        </p>
        <p>
          Status: <strong>{health.ok ? health.status : 'unreachable'}</strong>
        </p>
        {!health.ok && health.error ? <p className="muted">{health.error}</p> : null}
      </div>
    </div>
  );
}

