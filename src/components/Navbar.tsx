import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Sintomas', id: 'condicoes' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'FAQ', id: 'faq' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, border 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(253,250,246,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,150,90,0.2)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: scrolled ? '14px 32px' : '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'padding 0.4s ease' }}>
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span className="font-display" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.08em', color: scrolled ? 'var(--text-dark)' : '#fff', transition: 'color 0.4s ease' }}>
            DRA. LARA VERAS
          </span>
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500, marginTop: '2px' }}>
            COLOPROCTOLOGIA
          </span>
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map(item => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className={`nav-link ${scrolled ? 'nav-link--scrolled' : 'nav-link--top'}`}
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                fontWeight: 500,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.4s ease',
              }}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
          <a
            href="#cta"
            style={{
              background: 'var(--gold)',
              color: '#fff',
              padding: '10px 24px',
              fontSize: '11px',
              letterSpacing: '0.18em',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
          >
            AGENDAR AVALIAÇÃO
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: '4px' }}
          className="mobile-menu-btn"
        >
          <div style={{ width: '22px', height: '2px', background: 'var(--gold)', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: '16px', height: '2px', background: 'var(--gold)', marginBottom: '5px', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: '22px', height: '2px', background: 'var(--gold)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-panel${menuOpen ? ' mobile-panel--open' : ''}`} style={{
        flexDirection: 'column',
        background: 'rgba(253,250,246,0.98)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(184,150,90,0.15)',
        padding: '24px 32px 32px',
        gap: '4px',
      }}>
        {NAV_LINKS.map(item => (
          <button
            key={item.label}
            onClick={() => { scrollTo(item.id); setMenuOpen(false) }}
            style={{
              fontSize: '13px',
              letterSpacing: '0.18em',
              color: 'var(--text-dark)',
              fontWeight: 500,
              padding: '14px 0',
              borderBottom: '1px solid rgba(184,150,90,0.1)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
            }}
          >
            {item.label.toUpperCase()}
          </button>
        ))}
        <a
          href="#cta"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '16px',
            background: 'var(--gold)',
            color: '#fff',
            padding: '14px 24px',
            fontSize: '12px',
            letterSpacing: '0.18em',
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: '2px',
            textAlign: 'center',
          }}
        >
          AGENDAR AVALIAÇÃO
        </a>
      </div>

      <style>{`
        .nav-link--top { color: rgba(255,255,255,0.85); }
        .nav-link--scrolled { color: var(--text-mid); }
        .nav-link:hover { color: var(--gold) !important; }
        .mobile-panel { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-panel--open { display: flex; }
        }
      `}</style>
    </nav>
  )
}
