import React, { useState } from "react";

/**
 * GenX — Under Construction (Cloudflare Pages / Vite-ready)
 * - Minimal single-page site
 * - Shows logo + contact details
 * - No external dependencies
 *
 * Assets expected in /public:
 * - /genx-logo.png
 * - /favicon.ico (optional)
 */

export default function App() {
  const [logoOk, setLogoOk] = useState(true);
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <style>{css}</style>
      <div className="bg" aria-hidden />

      <main className="wrap">
        <div className="card">
          <div className="logo">
            {logoOk ? (
              <img
                src="/genx-logo.svg"
                alt="GenX logo"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <div className="logoFallback">GENX</div>
            )}
          </div>

          <h1>Under construction</h1>
          <p className="lead">
            Techniek op maat. Gedreven door analyse. Vooruit door innovatie.
          </p>

          <p className="sublead">
            Geïnteresseerd in de mogelijkheden? Neem dan contact op.
          </p>

          <div className="divider" />

          <div className="contact">
            <div className="contactRow">
              <span className="label">E-mail</span>
              <a className="value" href="mailto:info@genxsolutions.nl">
                info@genxsolutions.nl
              </a>
            </div>
            <div className="contactRow">
              <span className="label">Telefoon</span>
              <a className="value" href="tel:+31651643923">
                +31 6 5164 3923
              </a>
            </div>
          </div>

          <div className="note">
            Voor vragen of een korte intake: mail of bel gerust.
          </div>

          <footer className="footer">© {year} GenX Solutions</footer>
        </div>
      </main>
    </div>
  );
}

const css = `
:root{
  --bg:#07080b;
  --panel:rgba(12,13,17,.72);
  --border:rgba(255,255,255,.10);
  --text:#f5f7ff;
  --muted:rgba(245,247,255,.72);
  --muted2:rgba(245,247,255,.55);
  --accent:rgba(34,211,238,.95);
  --shadow: 0 18px 40px rgba(0,0,0,.45);
  --r3:24px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:var(--bg);color:var(--text);font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;}
a{color:inherit}

.page{min-height:100vh;position:relative}

.bg{position:fixed;inset:0;pointer-events:none;opacity:.75;
  background:
    radial-gradient(1200px 520px at 18% 8%, rgba(56,189,248,0.18), transparent 60%),
    radial-gradient(900px 520px at 82% 28%, rgba(34,197,94,0.10), transparent 55%),
    radial-gradient(1000px 650px at 50% 92%, rgba(168,85,247,0.10), transparent 55%);
}
.bg::before{content:"";position:absolute;inset:0;
  background:
    linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(640px 520px at 50% 18%, rgba(0,0,0,1), rgba(0,0,0,0));
  opacity:.35;
}
.bg::after{content:"";position:absolute;inset:0;
  background: repeating-linear-gradient(
    180deg,
    rgba(255,255,255,.035),
    rgba(255,255,255,.035) 1px,
    transparent 1px,
    transparent 6px
  );
  opacity:.10;
}

.wrap{min-height:100vh;display:grid;place-items:center;padding:28px 16px}

.card{width:min(720px, 100%);
  border:1px solid var(--border);
  background:var(--panel);
  border-radius:var(--r3);
  box-shadow:var(--shadow);
  padding:22px 20px;
  text-align:center;
  backdrop-filter: blur(10px);
}

.logo{display:grid;place-items:center;margin-top:4px;margin-bottom:14px}
.logo img{
  width: 320px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  /* Zorgt dat SVG altijd zichtbaar blijft */
  filter: drop-shadow(0 18px 34px rgba(0,0,0,.55));
}

.logoFallback{width:280px;height:140px;border-radius:18px;
  display:grid;place-items:center;
  border:1px solid var(--border);
  background:rgba(255,255,255,.04);
  font-weight:900;letter-spacing:.22em;
}

h1{margin:6px 0 8px;font-size:34px;letter-spacing:-.3px}
.lead{margin:0 auto 6px;max-width:52ch;color:var(--muted);line-height:1.65}
.sublead{margin:0 auto 10px;max-width:56ch;color:var(--muted2);line-height:1.6;font-size:14px}

.divider{height:1px;background:var(--border);margin:16px 0}

.contact{display:grid;gap:10px;max-width:460px;margin:0 auto;text-align:left}
.contactRow{display:flex;justify-content:space-between;gap:14px;align-items:center;
  padding:10px 12px;border:1px solid var(--border);border-radius:18px;background:rgba(255,255,255,.04)
}
.label{color:var(--muted2);font-weight:800;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
.value{color:var(--text);font-weight:800;text-decoration:none}
.value:hover{color:var(--accent)}

.note{margin:14px auto 0;color:var(--muted2);font-size:12px;line-height:1.6;max-width:60ch}
.footer{margin-top:16px;color:var(--muted2);font-size:12px}

@media (max-width: 420px){
  h1{font-size:28px}
  .contactRow{flex-direction:column;align-items:flex-start}
}
`;
