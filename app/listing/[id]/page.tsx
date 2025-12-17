import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function ListingDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const l = await prisma.listing.findUnique({ where: { id } });
  if (!l) return notFound();

  const labelClass =
    l.kind === "TRADE" ? "trade" : l.kind === "OFFER" ? "offer" : "search";
  const labelText =
    l.kind === "TRADE" ? "Tausch" : l.kind === "OFFER" ? "Biete" : "Suche";

  return (
    <div className="page">
      <header className="nav">
        <div className="logo">
          <div className="logo-icon">◎</div>
          <div>TUBESWAP</div>
        </div>

        <div className="nav-actions">
          <Link className="btn btn-outline" href="/#angebote">
            Zurück zu Angeboten
          </Link>
          <Link className="btn btn-primary" href="/new">
            Neue Anzeige
          </Link>
        </div>
      </header>

      <main className="main-grid">
        <section className="hero-card">
          <div className="hero-badge-row">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              ANZEIGE
            </div>
            <span>ID: {l.id}</span>
          </div>

          <h1>
            {l.title.includes("Röhren") ? (
              l.title
            ) : (
              <>
                {l.title.split(" ").slice(0, 1).join(" ")}{" "}
                <span>{l.title.split(" ").slice(1).join(" ")}</span>
              </>
            )}
          </h1>

          <div style={{ marginTop: 12 }}>
            <article className="listing">
              <div className={`listing-label ${labelClass}`}>{labelText}</div>

              <div className="listing-main">
                <div className="listing-title">Details</div>
                <div className="listing-meta">
                  {l.brand && (
                    <span>
                      <span className="dot"></span> Marke: {l.brand}
                    </span>
                  )}
                  {l.details && (
                    <span>
                      <span className="dot"></span> {l.details}
                    </span>
                  )}
                  {l.emission && (
                    <span>
                      <span className="dot"></span> Emission: {l.emission}
                    </span>
                  )}
                  {l.condition && (
                    <span>
                      <span className="dot"></span> Zustand: {l.condition}
                    </span>
                  )}
                  {l.category && (
                    <span>
                      <span className="dot"></span> Kategorie: {l.category}
                    </span>
                  )}
                </div>
              </div>

              <div className="listing-side">
                <div className="badge-location">
                  📍 {l.location ?? "Online / Versand"}
                  {l.zip ? ` · PLZ ${l.zip}` : ""}
                </div>

                <div>
                  {l.status ? (
                    <div className="status-pill">
                      ● <span>{l.status}</span>
                    </div>
                  ) : (
                    <div className="badge-condition">Status: —</div>
                  )}
                </div>
              </div>
            </article>
          </div>

          <div className="hero-actions" style={{ marginTop: 16 }}>
            <button className="btn btn-primary" type="button">
              Kontakt aufnehmen (später)
            </button>
            <Link className="btn" href="/#angebote">
              Weitere Angebote
            </Link>
          </div>

          <div className="hero-footer">
            <div>
              Erstellt:{" "}
              <strong>{new Date(l.createdAt).toLocaleString("de-DE")}</strong>
            </div>
            <div className="hero-footer-right">
              <span>Letztes Update: {new Date(l.updatedAt).toLocaleString("de-DE")}</span>
            </div>
          </div>
        </section>

        <aside className="side-stack">
          <section className="card">
            <div className="card-header">
              <div className="card-title">Hinweis</div>
              <div className="card-tag">MVP</div>
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)", display: "grid", gap: 6 }}>
              <div>• „Kontakt aufnehmen“ bauen wir als nächstes (E-Mail / Chat).</div>
              <div>• Danach: Bilder, Tags, Messwerte als eigene Felder.</div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

