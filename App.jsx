import { ArrowDown, ArrowUpRight, Check, ChevronRight, Command, FileText, Layers3, LockKeyhole, MoveUpRight, Workflow } from 'lucide-react'

const logo = `${import.meta.env.BASE_URL}Asset 1.svg`

function SectionLabel({ children, dark = false }) {
  return <span className={`section-label ${dark ? 'section-label-dark' : ''}`}>{children}</span>
}

function Topbar() {
  return (
    <header className="topbar">
      <a className="top-brand" href="#top" aria-label="DebtNext brand case study home">
        <img src={logo} alt="DebtNext" />
      </a>
      <span className="top-caption">BRAND IDENTITY · 2025</span>
      <a className="top-link" href="#identity">Explore the identity <ArrowDown size={14} strokeWidth={1.7} /></a>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <Topbar />
      <div className="hero-grid">
        <div className="hero-copy">
          <SectionLabel>BRAND IDENTITY / DEBTNEXT</SectionLabel>
          <h1>Recovery,<br /><span>reimagined.</span></h1>
          <div className="hero-bottomline">
            <p>A new visual language for a platform built around the work of recovery.</p>
            <a href="#context" className="round-link" aria-label="Read the brand context"><ArrowDown size={18} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="DebtNext logo presentation">
          <div className="art-meta"><span>THE NEW DEBTNEXT</span><span>EST. IN MOTION&nbsp; ↗</span></div>
          <div className="hero-logo-wrap"><img src={logo} alt="DebtNext logo, geometric blue folded-document mark and navy wordmark" /></div>
          <div className="hero-art-foot"><span>ONE MARK. A CLEARER DIRECTION.</span><span className="blue-dot" /></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </div>
      </div>
      <div className="hero-foot"><span>STRATEGY / IDENTITY / DIGITAL</span><span>SCROLL TO EXPLORE <ArrowDown size={12} /></span></div>
    </section>
  )
}

function Context() {
  return (
    <section id="context" className="context section-pad">
      <div className="context-aside"><SectionLabel>THE CONTEXT</SectionLabel><span className="aside-rule" /><span className="aside-note">A platform with a<br />bigger horizon.</span></div>
      <div className="context-main">
        <h2>DebtNext enters its next chapter as part of <em>TSI.</em></h2>
        <div className="context-copy-grid">
          <p>The acquisition brings DebtNext into a broader recovery ecosystem. The identity needed to honor the platform’s established name while expressing a more confident, connected future.</p>
          <p>The design direction is focused and deliberate: make complex work feel navigable. A precise geometric mark, an unmistakable blue signal, and a clear typographic voice create a foundation for every brand touchpoint.</p>
        </div>
        <div className="context-signoff"><span>STRATEGIC INTENT</span><span>CLARITY AT THE POINT OF COMPLEXITY</span></div>
      </div>
    </section>
  )
}

function Anatomy() {
  return (
    <section id="identity" className="anatomy section-pad">
      <div className="section-heading">
        <div><SectionLabel>THE ANATOMY OF THE MARK</SectionLabel><h2>A mark with<br />a sense of <i>direction.</i></h2></div>
        <p>Two simple ideas meet in one compact symbol: a document in motion, contained by a system-ready geometry.</p>
      </div>
      <div className="bento-grid">
        <article className="bento bento-main">
          <div className="bento-head"><span>01 / THE SIGNATURE</span><span>PRIMARY LOCKUP</span></div>
          <div className="lockup-display"><img src={logo} alt="DebtNext primary logo lockup" /></div>
          <div className="bento-foot"><span>DESIGNED TO HOLD ITS FORM</span><span>MARK + WORDMARK</span></div>
        </article>
        <article className="bento bento-fold">
          <div className="bento-head"><span>02 / THE FOLD</span><FileText size={17} /></div>
          <div className="fold-graphic"><div className="fold-sheet"><span /><span /><span /><i /></div><div className="fold-index">A DOCUMENT<br />TAKING SHAPE</div></div>
          <h3>Built around<br />the document.</h3>
          <p>The folded page signals the structured information that moves through recovery workflows.</p>
        </article>
        <article className="bento bento-hex">
          <div className="bento-head"><span>03 / THE FRAME</span><Layers3 size={17} /></div>
          <div className="hex-scene"><div className="hex-outline"><div className="hex-core"><span className="core-fold" /></div></div><span className="axis axis-x" /><span className="axis axis-y" /><span className="axis-note">SIX-SIDED<br />STRUCTURE</span></div>
          <h3>Order within<br />the system.</h3>
          <p>The hexagonal frame gives the mark a stable, modular silhouette at every scale.</p>
        </article>
        <article className="bento bento-blue">
          <span className="bento-blue-top">ONE CONNECTED IDEA</span>
          <div className="blue-equation"><span>DOCUMENT</span><i>+</i><span>STRUCTURE</span></div>
          <div className="blue-arrow"><ArrowUpRight size={25} /></div>
          <p>Made to move<br />work forward.</p>
        </article>
      </div>
    </section>
  )
}

const swatches = [
  { name: 'Signal Blue', hex: '#4396F6', tone: 'swatch-blue', use: 'Primary signal' },
  { name: 'Deep Navy', hex: '#001E41', tone: 'swatch-navy', use: 'Core expression' },
  { name: 'Cobalt', hex: '#23588C', tone: 'swatch-cobalt', use: 'Supporting depth' },
  { name: 'Soft White', hex: '#F4F6F8', tone: 'swatch-paper', use: 'Quiet canvas' },
]

function DesignSystem() {
  return (
    <section className="system section-pad">
      <div className="system-head">
        <div><SectionLabel>THE DESIGN SYSTEM</SectionLabel><h2>Distinct by design.<br /><i>Consistent by nature.</i></h2></div>
        <p>A compact toolkit with enough range to move from brand expression to product interface without losing its point of view.</p>
      </div>
      <div className="system-content">
        <div className="palette-block">
          <div className="subhead"><span>01 — COLOR</span><span>CORE PALETTE</span></div>
          <div className="swatch-list">{swatches.map(s => <div className="swatch-row" key={s.name}><div className={`swatch ${s.tone}`} /><span className="swatch-name">{s.name}</span><span className="swatch-hex">{s.hex}</span><span className="swatch-use">{s.use}</span></div>)}</div>
        </div>
        <div className="type-block">
          <div className="subhead"><span>02 — TYPOGRAPHY</span><span>POPPINS / SANS SERIF</span></div>
          <div className="type-sample"><div className="type-spec"><span>DISPLAY / LIGHT</span><span>48–120 PX</span></div><div className="type-display">Clear<br /><i>direction.</i></div></div>
          <div className="type-lower"><div className="type-sample-small">Aa</div><div><span className="type-caption">TEXT / REGULAR</span><p>Thoughtful spacing and an open, readable voice keep information in focus.</p></div></div>
          <div className="type-lower type-mono"><div className="type-sample-small">01</div><div><span className="type-caption">DATA / MONO</span><p>Case IDs, statuses, and interface details.</p></div></div>
        </div>
      </div>
      <div className="type-note"><span>TYPE IS A NAVIGATION TOOL.</span><span>FORM FOLLOWS INFORMATION.</span></div>
    </section>
  )
}

function ProductMock() {
  return (
    <section className="applications section-pad">
      <div className="applications-intro"><SectionLabel dark>VISUAL APPLICATIONS</SectionLabel><h2>From brand mark<br />to <i>working system.</i></h2><p>A conceptual interface direction for dPlat. The sample content below is illustrative and uses no customer information.</p></div>
      <div className="product-stage">
        <div className="product-frame">
          <div className="product-sidebar">
            <img src={logo} alt="DebtNext" />
            <div className="workspace-name"><span className="workspace-icon"><Command size={15} /></span><div><b>Northstar Recovery</b><small>Workspace</small></div><ChevronRight size={14} /></div>
            <div className="nav-caption">WORKSPACE</div>
            <div className="nav-item active"><Workflow size={15} /> Work overview</div>
            <div className="nav-item"><Layers3 size={15} /> Recovery paths <span>04</span></div>
            <div className="nav-item"><FileText size={15} /> Document queue <span>12</span></div>
            <div className="sidebar-bottom"><span className="avatar">ND</span><div><b>Demo operator</b><small>Illustrative profile</small></div><ChevronRight size={13} /></div>
          </div>
          <div className="product-main">
            <div className="product-topline"><span>WORKSPACE / OVERVIEW</span><span><LockKeyhole size={12} /> CONCEPT UI</span></div>
            <div className="product-title-row"><div><h3>Work overview</h3><p>Keep active work moving with clear next steps.</p></div><button className="product-button">View workflow <MoveUpRight size={13} /></button></div>
            <div className="product-info"><div className="info-title"><span>RECENT ACTIVITY</span><span>LAST 7 DAYS&nbsp;⌄</span></div>
              <div className="activity-head"><span>WORKFLOW</span><span>STAGE</span><span>UPDATED</span><span>OWNER</span></div>
              <div className="activity-row"><span className="flow-mark"><FileText size={14} /> Document review</span><span className="stage-tag stage-blue"><i /> In review</span><span>Today, 10:42</span><span className="owner">AR</span></div>
              <div className="activity-row"><span className="flow-mark"><Workflow size={14} /> Routing check</span><span className="stage-tag stage-green"><i /> Ready</span><span>Today, 09:18</span><span className="owner owner-alt">MK</span></div>
              <div className="activity-row"><span className="flow-mark"><Layers3 size={14} /> Exception path</span><span className="stage-tag stage-muted"><i /> Open</span><span>Yesterday</span><span className="owner owner-third">JL</span></div>
              <div className="concept-note"><span className="note-icon"><Check size={14} /></span><p><b>Designed for a clear next step.</b><br />Focused states help teams understand where work stands.</p><ArrowUpRight size={15} /></div>
            </div>
            <div className="product-foot"><span>ILLUSTRATIVE PRODUCT DIRECTION</span><span>DEBTNEXT / dPLAT</span></div>
          </div>
        </div>
        <div className="stage-index"><span>INTERFACE STUDY</span><span>01 — 03</span></div>
      </div>
      <div className="integration-row"><div className="integration-title">A VISUAL LANGUAGE<br />THAT SCALES ACROSS</div><div className="integration-item"><span className="integration-glyph">↗</span> Platform</div><div className="integration-item"><span className="integration-glyph">⌘</span> Workflows</div><div className="integration-item"><span className="integration-glyph">□</span> Integrations</div><div className="integration-item"><span className="integration-glyph">◷</span> Operations</div></div>
    </section>
  )
}

function Closing() {
  return (
    <footer className="closing">
      <div className="closing-top"><img src={logo} alt="DebtNext" /><span>BRAND IDENTITY / CASE STUDY</span></div>
      <div className="closing-content"><span>DEBTNEXT × TSI</span><h2>Clarity for<br />what comes <i>next.</i></h2><a href="#top" className="closing-link">BACK TO TOP <ArrowUpRight size={16} /></a></div>
      <div className="closing-bottom"><span>STRATEGY / IDENTITY / DIGITAL</span><span>DEBTNEXT · 2025</span></div>
    </footer>
  )
}

export default function App() {
  return <main><Hero /><Context /><Anatomy /><DesignSystem /><ProductMock /><Closing /></main>
}
