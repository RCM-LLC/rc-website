const { useState } = React;

/* ── Data ── */
const TEAM = [
  {
    i: "DB",
    n: "Drew Beaver",
    r: "General Partner",
    b: "Oil and refined products trader with over 15 years of experience in physical and financial energy markets. Previously a Partner at Citadel, where he helped build and lead the Houston commodities office and refined products trading desk, and before that a Partner at Vitol, where he rose from analyst to lead U.S. distillate trader.",
    prior: "Prior — Citadel · Vitol",
    cls: "",
    photo: null,
  },
];

const HISTORY = [
  { yr: "2019", t: "Founded", d: "Reset Capital is established around a focused thesis: provide diversified exposure to durable assets through deep industry expertise and operational partnerships." },
  { yr: "2021", t: "Energy vertical launched", d: "The firm makes its first investments in energy, targeting companies reshaping how the world produces, stores, and delivers energy." },
  { yr: "2023", t: "MedTech vertical launched", d: "Reset Capital expands into medical technology, backing founders building at the frontier of medicine and technology." },
];

/* ── Navbar ── */
function Navbar({ currentPage, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "home",  label: "Home" },
    { id: "about", label: "About" },
    { id: "team",  label: "Team" },
  ];
  return (
    <div className="navbar">
      <div className="wrap inner">
        <img
          src="assets/logo-horizontal.png"
          alt="Reset Capital"
          onClick={() => { onNav("home"); setMenuOpen(false); }}
        />
        <div className={`links${menuOpen ? " open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              className={currentPage === l.id ? "active" : ""}
              onClick={() => { onNav(l.id); setMenuOpen(false); }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  );
}

/* ── Footer ── */
function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <img src="assets/logo-full-cream.svg" alt="Reset Capital" />
            <div className="about">
              Private investment in durable assets — Medical Technology and Energy.
            </div>
          </div>
          <div>
            <h4>Firm</h4>
            <ul>
              <li onClick={() => onNav("about")}>About</li>
              <li onClick={() => onNav("home")}>Our Verticals</li>
              <li onClick={() => onNav("team")}>Team</li>
            </ul>
          </div>
          <div>
            <h4>Investors</h4>
            <ul>
              <li>Investor Relations</li>
              <li>Form ADV</li>
              <li>LP Login</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>contact@resetcapital.com</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>© 2026 Reset Capital. All rights reserved.</div>
          <div>Privacy · Terms · Disclosures</div>
        </div>
      </div>
    </footer>
  );
}

/* ── Hero A ── */
function HeroA({ onNav }) {
  return (
    <section className="hero-a">
      <div className="wrap">
        <div className="grid">
          <div>
            <span className="eb">Private Investment Platform</span>
            <h1>
              Redefining
              <em>Opportunity.</em>
            </h1>
          </div>
          <div>
            <p className="lede">
              Reset Capital is a private investment platform focused on providing
              diversified exposure to durable assets through deep industry
              expertise and operational partnerships.
            </p>
            <div className="meta">
              <div>
                <div className="k">Verticals</div>
                <div className="v">MedTech · Energy<small>Two sectors of focus</small></div>
              </div>
              <div>
                <div className="k">Approach</div>
                <div className="v">Operational<small>Deep partnerships</small></div>
              </div>
            </div>
            <div className="cta">
              <a className="btn primary" onClick={() => onNav("about")}>
                Our approach →
              </a>
              <a className="btn secondary" onClick={() => onNav("team")}>
                Meet the team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Thesis ── */
function Thesis() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="thesis">
          <div className="col-l">
            <span className="eb">Our Thesis</span>
            <h2>Operational expertise compounds.</h2>
          </div>
          <div className="col-r">
            <p className="lead">
              We focus on sectors where operators, not allocators, create durable returns.
            </p>
            <p>
              Medical Technology and Energy share a structural feature: the work of making
              assets produce cash takes years, demands domain judgment, and cannot be
              financialized away. We partner with founders and operators for the full horizon.
            </p>
            <p>
              Our team brings direct operating experience in both verticals before capital
              allocation became the job. That background is the firm's single source of edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pillars ── */
function Pillars() {
  const items = [
    { n: "01", h: "Sector discipline", b: "Only two verticals — Medical Technology and Energy — where operational judgment compounds over time and our team has direct domain experience." },
    { n: "02", h: "Operational partnership", b: "Every investment is paired with deep operational expertise. We engage as partners, not observers — bringing hands-on involvement at every stage." },
    { n: "03", h: "Long-term horizon", b: "Durable assets deserve patient capital. We invest with a long-term horizon, allowing compounding to work and avoiding artificial exit pressure." },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <span className="eb">Our Approach</span>
        <h2>Three disciplines, applied to every partnership.</h2>
        <p className="lede">
          The firm is built on a narrow set of commitments. We do not vary them by deal, vintage, or market cycle.
        </p>
        <div className="pillars-a">
          {items.map((p) => (
            <div className="pillar" key={p.n}>
              <div className="n">{p.n}</div>
              <h4>{p.h}</h4>
              <p>{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Verticals ── */
function Verticals() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eb">Investment Verticals</span>
        <h2>Two verticals. One discipline.</h2>
        <p className="lede">
          Both are real-asset-heavy sectors where operating judgment, not deal flow, determines outcomes.
        </p>
        <div className="verticals-a">
          <div className="vert-a energy">
            <div className="label">Vertical 01 · Energy</div>
            <h3>Energy</h3>
            <p>
              We invest in companies reshaping how the world produces, stores, and delivers
              energy — from grid modernization and distributed generation to next-generation
              fuels and industrial decarbonization.
            </p>
            <ul className="focus-list">
              <li><span>Grid Modernization</span><span className="tag-pill">Focus</span></li>
              <li><span>Distributed Generation</span><span className="tag-pill">Focus</span></li>
              <li><span>Next-Gen Fuels</span><span className="tag-pill">Focus</span></li>
              <li><span>Industrial Decarbonization</span><span className="tag-pill">Focus</span></li>
            </ul>
          </div>
          <div className="vert-a medtech">
            <div className="label">Vertical 02 · MedTech</div>
            <h3>Medical Technology</h3>
            <p>
              We back founders building at the frontier of medicine and technology — devices,
              diagnostics, and digital health platforms that improve outcomes and expand access
              to care.
            </p>
            <ul className="focus-list">
              <li><span>Medical Devices</span><span className="tag-pill">Focus</span></li>
              <li><span>Diagnostics</span><span className="tag-pill">Focus</span></li>
              <li><span>Digital Health</span><span className="tag-pill">Focus</span></li>
              <li><span>Care Access Platforms</span><span className="tag-pill">Focus</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Team preview (Home) ── */
function TeamPreview({ onNav }) {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eb">Team</span>
        <h2>Deep expertise. Operational focus.</h2>
        <p className="lede">
          Our partners bring decades of hands-on experience in both verticals before capital allocation became the job.
        </p>
        <div className="team-preview">
          {TEAM.map((p) => (
            <div className="person" key={p.i}>
              <div className={`avatar ${p.cls}`}>
                {p.photo ? <img src={p.photo} alt={p.n} /> : p.i}
              </div>
              <div className="name">{p.n}</div>
              <div className="role">{p.r}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <a className="btn secondary" onClick={() => onNav("team")}>
            Meet the full team →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Band ── */
function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap row">
        <div>
          <span className="eb">Contact</span>
          <h3>
            We partner with a focused group of founders and operators.
            <br />
            Introductions welcome.
          </h3>
        </div>
        <a className="btn primary-inv" href="mailto:contact@resetcapital.com">
          Contact the team →
        </a>
      </div>
    </section>
  );
}

/* ── Pages ── */
function HomePage({ onNav }) {
  return (
    <React.Fragment>
      <HeroA onNav={onNav} />
      <Thesis />
      <Pillars />
      <Verticals />
      <TeamPreview onNav={onNav} />
      <CtaBand />
    </React.Fragment>
  );
}

function AboutPage({ onNav }) {
  return (
    <React.Fragment>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <a onClick={() => onNav("home")}>Home</a>
            <span className="sep">/</span>
            About
          </div>
          <span className="eb">About Reset Capital</span>
          <h1>A focused firm built around operational expertise.</h1>
          <p className="dek">
            Reset Capital is a private investment platform focused on providing diversified
            exposure to durable assets. We partner with founders and operators building the
            next generation of Energy and Medical Technology companies.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="history">
            <div>
              <span className="eb">Firm History</span>
              <h2>Built for the long hold.</h2>
            </div>
            <ol>
              {HISTORY.map((h) => (
                <li key={h.yr}>
                  <div className="yr">{h.yr}</div>
                  <div className="ev">
                    <h4>{h.t}</h4>
                    <p>{h.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Pillars />
      <Verticals />
      <CtaBand />
    </React.Fragment>
  );
}

function TeamPage({ onNav }) {
  return (
    <React.Fragment>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <a onClick={() => onNav("home")}>Home</a>
            <span className="sep">/</span>
            Team
          </div>
          <span className="eb">The Team</span>
          <h1>Operators, first.</h1>
          <p className="dek">
            Our partners bring direct operating experience in both verticals before capital
            allocation became the job. Every investment is paired with a partner who brings
            hands-on domain expertise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eb">Investment Team</span>
          <h2>Focused expertise across both verticals.</h2>
          <p className="lede">
            A small, concentrated team — so every investment gets a partner's full attention.
          </p>
          <div className="team-full">
            {TEAM.map((p) => (
              <div className="person" key={p.i}>
                <div className={`avatar ${p.cls}`}>
                  {p.photo ? <img src={p.photo} alt={p.n} /> : p.i}
                </div>
                <div className="name">{p.n}</div>
                <div className="role">{p.r}</div>
                <div className="bio">{p.b}</div>
                <div className="prior">{p.prior}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </React.Fragment>
  );
}

/* ── App root ── */
function App() {
  const [page, setPage] = useState("home");

  const onNav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <React.Fragment>
      <Navbar currentPage={page} onNav={onNav} />
      {page === "home"  && <HomePage onNav={onNav} />}
      {page === "about" && <AboutPage onNav={onNav} />}
      {page === "team"  && <TeamPage onNav={onNav} />}
      <Footer onNav={onNav} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
