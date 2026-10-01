:root {
  --bg: #07111f;
  --bg-alt: #0b1830;
  --panel: rgba(12, 24, 42, 0.82);
  --panel-strong: rgba(17, 30, 52, 0.92);
  --glass: rgba(255, 255, 255, 0.04);
  --line: rgba(148, 163, 184, 0.14);
  --text: #ecf3ff;
  --muted: #9db1cb;
  --cyan: #5be7ff;
  --blue: #7aa2ff;
  --green: #7efac3;
  --yellow: #ffd86a;
  --pink: #ff7db8;
  --orange: #ff9c5a;
  --red: #ff758a;
  --shadow: 0 20px 60px rgba(3, 8, 18, 0.5);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(91, 231, 255, 0.12), transparent 24%),
    radial-gradient(circle at top right, rgba(122, 162, 255, 0.12), transparent 26%),
    linear-gradient(180deg, #040914 0%, var(--bg) 100%);
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at center, black 42%, transparent 100%);
  pointer-events: none;
}

.topbar,
.page-shell {
  position: relative;
  z-index: 1;
}

.topbar {
  max-width: 1220px;
  margin: 26px auto 0;
  padding: 18px 28px;
  background: rgba(10, 18, 30, 0.7);
  border: 1px solid var(--line);
  border-radius: 20px;
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--cyan), var(--blue));
  color: #041321;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  font-weight: 900;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--muted);
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

h1 {
  font-size: 1.3rem;
}

.nav {
  display: flex;
  gap: 26px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
}

.primary-btn,
.ghost-btn,
button,
select,
input {
  font: inherit;
}

.primary-btn {
  border: 0;
  background: linear-gradient(135deg, var(--cyan), var(--blue));
  color: #061521;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 12px 28px rgba(91, 231, 255, 0.28);
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.page-shell {
  max-width: 1220px;
  margin: 28px auto 48px;
  padding: 0 18px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  align-items: center;
  padding: 18px 0 10px;
}

.hero-copy,
.hero-visual,
.stat-card,
.panel,
.signal-card,
.result-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.hero-copy {
  padding: 34px 32px;
}

.tag {
  display: inline-block;
  background: rgba(91, 231, 255, 0.08);
  border: 1px solid rgba(91, 231, 255, 0.15);
  color: var(--cyan);
  font-size: 0.76rem;
  padding: 8px 12px;
  border-radius: 999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.hero-copy h2 {
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
  max-width: 620px;
}

.muted {
  margin-top: 18px;
  max-width: 600px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.02rem;
}

.search-panel {
  display: flex;
  gap: 14px;
  margin-top: 28px;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 14px;
}

.search-box input {
  flex: 1;
  background: transparent;
  border: 0;
  color: var(--text);
  outline: none;
  font-size: 0.98rem;
}

.search-box input::placeholder {
  color: var(--muted);
}

.search-icon {
  color: var(--muted);
  font-size: 1.1rem;
}

.chip-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.chip {
  border-radius: 999px;
  border: 1px solid var(--line);
  padding: 9px 14px;
  font-size: 0.85rem;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.02);
}

.chip.active {
  background: rgba(91, 231, 255, 0.08);
  color: var(--cyan);
  border-color: rgba(91, 231, 255, 0.15);
}

.hero-visual {
  padding: 22px;
  display: grid;
  gap: 18px;
}

.signal-card {
  background: linear-gradient(180deg, rgba(10, 20, 35, 0.96), rgba(9, 17, 29, 0.84));
  border: 1px solid var(--line);
  padding: 20px 18px;
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.8rem;
}

.status,
.positive,
.neutral {
  font-size: 0.78rem;
  font-weight: 700;
}

.positive {
  color: var(--green);
}

.neutral {
  color: var(--yellow);
}

.large-score {
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.08em;
  margin-top: 14px;
}

.sparkline {
  display: flex;
  align-items: end;
  gap: 8px;
  height: 76px;
  padding-top: 18px;
}

.sparkline span {
  display: block;
  flex: 1;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, var(--cyan), rgba(91, 231, 255, 0.2));
  height: var(--h, 52%);
  animation: pulse 3.5s ease-in-out infinite;
}

.sparkline span:nth-child(1) { --h: 28%; }
.sparkline span:nth-child(2) { --h: 42%; }
.sparkline span:nth-child(3) { --h: 55%; }
.sparkline span:nth-child(4) { --h: 66%; }
.sparkline span:nth-child(5) { --h: 76%; }
.sparkline span:nth-child(6) { --h: 82%; }
.sparkline span:nth-child(7) { --h: 90%; }
.sparkline span:nth-child(8) { --h: 100%; }

@keyframes pulse {
  0%, 100% { opacity: 0.75; transform: scaleY(0.98); }
  50% { opacity: 1; transform: scaleY(1.02); }
}

.mini-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}

.mini-metrics small {
  display: block;
  color: var(--muted);
}

.mini-metrics strong {
  display: block;
  margin-top: 8px;
  font-size: 1.1rem;
}

.mini-stack {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.signal-card.small {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;
}

.signal-card.small small,
.signal-card.small span {
  color: var(--muted);
}

.signal-card.small strong {
  font-size: 1.8rem;
  margin: 12px 0 8px;
}

.signal-card.cyan {
  background: linear-gradient(180deg, rgba(13, 31, 44, 0.96), rgba(8, 20, 28, 0.92));
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.stat-card {
  padding: 20px 18px;
}

.stat-card p {
  color: var(--muted);
  font-size: 0.78rem;
  margin-bottom: 8px;
}

.stat-card h3 {
  font-size: 1.6rem;
  letter-spacing: -0.04em;
}

.stat-card span {
  display: block;
  margin-top: 12px;
}

.finder-section {
  margin-top: 30px;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.section-head h3 {
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  letter-spacing: -0.05em;
}

.toolbar {
  display: flex;
  gap: 12px;
}

select {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.result-card {
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.result-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 14px;
}

.ticker {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ticker-badge {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(91, 231, 255, 0.18), rgba(122, 162, 255, 0.12));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: var(--cyan);
}

.ticker strong {
  display: block;
  font-size: 1.3rem;
}

.ticker small,
.meta-label,
.meta-value {
  color: var(--muted);
}

.score-pill {
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(126, 250, 195, 0.1);
  border: 1px solid rgba(126, 250, 195, 0.16);
  color: var(--green);
  font-weight: 800;
  font-size: 0.8rem;
}

.result-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 18px;
}

.meta-label {
  display: block;
  font-size: 0.76rem;
  margin-bottom: 8px;
}

.meta-value {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text);
}

.result-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
}

.signal-note {
  font-size: 0.8rem;
  color: var(--muted);
}

.result-footer .positive,
.result-footer .neutral {
  font-size: 0.82rem;
}

.lower-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 18px;
  margin-top: 32px;
}

.panel {
  padding: 20px 18px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.ghost-btn {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 10px 12px;
}

.watchlist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.watchlist li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 14px;
}

.watchlist .mini-badge {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--cyan);
  background: rgba(91, 231, 255, 0.08);
}

.watchlist strong {
  display: block;
  line-height: 1.3;
}

.watchlist small {
  color: var(--muted);
}

.heatmap {
  display: grid;
  gap: 14px;
}

.heat-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: center;
  gap: 12px;
}

.bar {
  height: 14px;
  border-radius: 999px;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

.bar::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--w, 50%);
  background: linear-gradient(90deg, rgba(122, 162, 255, 0.4), rgba(91, 231, 255, 0.84));
  border-radius: inherit;
}

.bar i {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-style: normal;
  font-size: 0.72rem;
  color: rgba(236, 243, 255, 0.8);
}

.bar-9 { --w: 92%; }
.bar-8 { --w: 88%; }
.bar-6 { --w: 64%; }
.bar-7 { --w: 72%; }
.bar-5 { --w: 56%; }

@media (max-width: 960px) {
  .hero,
  .lower-grid,
  .results-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 720px) {
  .topbar {
    padding: 16px 18px;
    flex-wrap: wrap;
  }

  .stats-grid,
  .results-grid,
  .lower-grid {
    grid-template-columns: 1fr;
  }

  .search-panel,
  .toolbar,
  .section-head,
  .result-footer,
  .panel-head {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-copy,
  .hero-visual {
    padding: 18px;
  }

  .mini-stack {
    grid-template-columns: 1fr;
  }
}
