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
              COLOPROCTOLOGIA · ASSOALHO PÉLVICO
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
              Você não precisa conviver com dor,{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
                desconforto
              </span>{' '}
              ou constrangimento íntimo.
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
              Existe tratamento eficaz e, em muitos casos, a solução é cirúrgica.
            </p>
          </div>

          {/* CTA buttons */}
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="300" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#cta"
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
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              AGENDAR AVALIAÇÃO
            </a>
            <a
              href="#condicoes"
              style={{
                border: '1px solid rgba(184,150,90,0.5)',
                color: 'var(--gold-light)',
                padding: '16px 36px',
                fontSize: '12px',
                letterSpacing: '0.2em',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(184,150,90,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,150,90,0.5)'; e.currentTarget.style.background = 'transparent'; }}
            >
              VER CONDIÇÕES TRATADAS
            </a>
          </div>

          {/* Stats row */}
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" style={{
            display: 'flex', gap: '48px', marginTop: '64px', flexWrap: 'wrap',
            paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { num: 'CRM', label: 'Especialista registrada' },
              { num: 'RBT', label: 'Cirurgia robótica' },
              { num: '100%', label: 'Foco em resolução' },
            ].map(s => (
              <div key={s.num}>
                <div className="font-display" style={{ fontSize: '28px', color: 'var(--gold)', fontWeight: 700 }}>{s.num}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', marginTop: '4px' }}>{s.label.toUpperCase()}</div>
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
