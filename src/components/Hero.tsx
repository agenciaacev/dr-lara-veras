import drLara from '../assets/dr-lara.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--green-dark) 0%, #0f1f0f 50%, #1a2e1a 100%)',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(ellipse at 80% 50%, rgba(184,150,90,0.08) 0%, transparent 60%),
                          radial-gradient(ellipse at 20% 80%, rgba(184,150,90,0.05) 0%, transparent 50%)`,
      }} />

      {/* Decorative lines */}
      <div style={{
        position: 'absolute', top: '20%', right: '8%',
        width: '1px', height: '200px',
        background: 'linear-gradient(180deg, transparent, rgba(184,150,90,0.4), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: '80px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(184,150,90,0.4), transparent)',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 32px',
        width: '100%', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'stretch',
      }}
        className="hero-grid hero-grid-wrapper"
      >

        {/* Left: content */}
        <div className="hero-left-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(60px, 10vh, 120px) 0 clamp(40px, 6vh, 80px)' }}>
          {/* Eyebrow */}
          <div data-aos="fade-up" data-aos-duration="800" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
              COLOPROCTOLOGISTA · ASSOALHO PÉLVICO · CIRURGIA MINIMAMENTE INVASIVA
            </span>
          </div>

          {/* Main headline */}
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
            <h1 className="font-display" style={{
              fontSize: 'clamp(28px, 3.2vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}>
              Existe tratamento para o que você está sentindo.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
                E ele começa com o diagnóstico certo.
              </span>
            </h1>
          </div>

          {/* Sub */}
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
            <p className="font-cormorant" style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '48px',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}>
              A Dra. Lara Veras é especialista em coloproctologia e assoalho pélvico. Do diagnóstico ao procedimento cirúrgico, você está em mãos experientes e acolhedoras.
            </p>
          </div>

          {/* CTA buttons */}
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="300" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/5585999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--gold)',
                color: '#fff',
                padding: '16px 36px',
                fontSize: '12px',
                letterSpacing: '0.2em',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              FALAR COM A EQUIPE NO WHATSAPP →
            </a>
          </div>

          {/* Credentials row */}
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" style={{
            display: 'flex', gap: '32px', marginTop: '64px', flexWrap: 'wrap',
            paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { label: 'Professora da UFC' },
              { label: 'Presidente da SOBRACIL' },
              { label: 'CRM 13899' },
              { label: 'RQE 9165' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}>{s.label.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          style={{ position: 'relative', overflow: 'hidden' }}
          className="hero-photo-col"
        >
          <img
            src={drLara}
            alt="Dra. Lara Veras"
            className="hero-photo-img"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'brightness(0.92)',
            }}
          />
          {/* Gold frame accent */}
          <div style={{
            position: 'absolute',
            top: '32px', right: '-8px',
            width: 'calc(100% - 16px)', height: 'calc(100% - 64px)',
            border: '1px solid rgba(184,150,90,0.3)',
            pointerEvents: 'none',
            zIndex: 2,
          }} />
          {/* Gradient fade into section bg on left edge */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10,20,10,0.6) 0%, transparent 30%)',
            zIndex: 1,
          }} />
          {/* Name badge */}
          <div style={{
            position: 'absolute',
            bottom: '40px', left: '24px',
            background: 'rgba(15,31,15,0.92)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(184,150,90,0.25)',
            padding: '16px 24px',
            borderRadius: '2px',
            zIndex: 3,
          }}>
            <div className="font-display" style={{ fontSize: '14px', color: '#fff', fontWeight: 700, letterSpacing: '0.06em' }}>
              Dra. Lara Veras
            </div>
            <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.2em', marginTop: '4px' }}>
              COLOPROCTOLOGISTA
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, rgba(184,150,90,0.6), transparent)' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 768px) {
          .hero-section {
            height: auto !important;
            min-height: 100svh !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 0 24px !important;
          }
          .hero-photo-col {
            order: -1;
            height: auto !important;
            min-height: unset !important;
            max-height: unset !important;
          }
          .hero-photo-img {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            height: auto !important;
            object-fit: initial !important;
            display: block !important;
          }
          .hero-left-col {
            padding: 0 0 64px !important;
          }
          .hero-grid-wrapper {
            padding-top: 90px !important;
          }
        }
      `}</style>
    </section>
  )
}
