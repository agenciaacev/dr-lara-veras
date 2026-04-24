export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--green-dark) 0%, #0f1f0f 50%, #1a2e1a 100%)',
        display: 'flex',
        alignItems: 'center',
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

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        
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
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '12px',
            maxWidth: '700px',
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
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '48px',
            maxWidth: '520px',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            Existe tratamento eficaz — e, em muitos casos, a solução é cirúrgica.
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
          display: 'flex', gap: '48px', marginTop: '80px', flexWrap: 'wrap',
          paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.08)',
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
      `}</style>
    </section>
  )
}
