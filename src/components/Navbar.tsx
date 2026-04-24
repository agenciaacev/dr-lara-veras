import { useState, useEffect } from 'react'

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
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(253,250,246,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,150,90,0.2)' : 'none',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span className="font-display" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.08em', color: scrolled ? 'var(--text-dark)' : '#fff', transition: 'color 0.4s ease' }}>
            DRA. LARA VERAS
          </span>
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500, marginTop: '2px' }}>
            COLOPROCTOLOGIA
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden-mobile">
          {[
            { label: 'Sinais', href: '#condicoes' },
            { label: 'Sobre', href: '#sobre' },
            { label: 'Cirurgia', href: '#tratamentos' },
            { label: 'Contato', href: '#cta' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${scrolled ? 'nav-link--scrolled' : 'nav-link--top'}`}
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.4s ease',
              }}
            >
              {item.label.toUpperCase()}
            </a>
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
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          className="mobile-menu-btn"
        >
          <div style={{ width: '22px', height: '2px', background: 'var(--gold)', marginBottom: '5px', transition: 'all 0.3s' }} />
          <div style={{ width: '16px', height: '2px', background: 'var(--gold)', marginBottom: '5px', transition: 'all 0.3s' }} />
          <div style={{ width: '22px', height: '2px', background: 'var(--gold)', transition: 'all 0.3s' }} />
        </button>
      </div>

      <style>{`
        .nav-link--top { color: rgba(255,255,255,0.85); }
        .nav-link--scrolled { color: var(--text-mid); }
        .nav-link:hover { color: var(--gold) !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
