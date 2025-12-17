import Link from "next/link";
import { createListing } from "@/app/actions";

export default function NewListing() {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">
          <div className="logo-icon">◎</div>
          <div>TUBESWAP</div>
        </div>

        <div className="nav-actions">
          <Link className="btn btn-outline" href="/#angebote">
            Zurück
          </Link>
        </div>
      </header>

      <main className="main-grid">
        <section className="hero-card">
          <div className="hero-badge-row">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              NEUE ANZEIGE
            </div>
            <span>In 30 Sekunden online</span>
          </div>

          <h1>
            Erstelle eine <span>Anzeige</span>.
          </h1>

          <p className="hero-subtitle">
            Titel ist Pflicht – alles andere kannst du später ergänzen.
          </p>

          <form action={createListing} style={{ display: "grid", gap: 10, marginTop: 10 }}>
            <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <select name="kind" className="btn" defaultValue="OFFER" style={{ justifyContent: "space-between" }}>
                <option value="OFFER">Biete</option>
                <option value="SEARCH">Suche</option>
                <option value="TRADE">Tausch</option>
              </select>

              <select name="category" className="btn" defaultValue="OTHER" style={{ justifyContent: "space-between" }}>
                <option value="POWER_TUBES">Endröhren</option>
                <option value="PREAMP_TUBES">Vorstufen</option>
                <option value="GUITAR_AMPS">Gitarrenamps</option>
                <option value="HIFI_AMPS">HiFi-Amps</option>
                <option value="OTHER">Sonstiges</option>
              </select>
            </div>

            <input name="title" required placeholder="Titel (z.B. 2× EL34 gematcht – suche 6V6)" className="btn" />

            <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <input name="brand" placeholder="Marke (optional, z.B. RFT)" className="btn" />
              <input name="condition" placeholder="Zustand (optional, z.B. gebraucht · getestet)" className="btn" />
            </div>

            <input name="details" placeholder="Details (optional, z.B. gemessen am Funke W19)" className="btn" />
            <input name="emission" placeholder="Messwert (optional, z.B. ~95%)" className="btn" />

            <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <input name="location" placeholder="Ort (optional, z.B. Leipzig)" className="btn" />
              <input name="zip" placeholder="PLZ (optional, z.B. 04109)" className="btn" />
            </div>

            <input name="status" placeholder='Status (optional, z.B. "Reserviert")' className="btn" />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="submit" className="btn btn-primary">
                Anzeige speichern
              </button>
              <Link className="btn" href="/#angebote">
                Abbrechen
              </Link>
            </div>
          </form>
        </section>

        <aside className="side-stack">
          <section className="card">
            <div className="card-header">
              <div className="card-title">Tipps</div>
              <div className="card-tag">kurz</div>
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)", display: "grid", gap: 6 }}>
              <div>• Titel: Typ + Wunsch + Zustand.</div>
              <div>• Messwerte kurz als Text reicht.</div>
              <div>• Ort/PLZ optional.</div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

