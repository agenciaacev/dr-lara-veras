export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        
        {/* Left — image placeholder with design */}
        <div data-aos="fade-right" data-aos-duration="1000" style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            background: 'linear-gradient(160deg, var(--green-dark), #0f1f0f)',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `radial-gradient(circle at 30% 70%, rgba(184,150,90,0.15) 0%, transparent 50%)`,
            }} />
            <div style={{
              position: 'absolute', bottom: '40px', left: '40px', right: '40px',
              borderTop: '1px solid rgba(184,150,90,0.3)',
              paddingTop: '24px',
            }}>
              <p className="font-display" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '22px', fontStyle: 'italic' }}>
                Dra. Lara Veras
              </p>
              <p style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '0.2em', marginTop: '6px' }}>
                COLOPROCTOLOGISTA
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute', top: '-20px', right: '-20px',
            background: 'var(--gold)',
            color: '#fff',
            padding: '20px',
            borderRadius: '2px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(139,110,58,0.3)',
          }}>
            <div className="font-display" style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>+</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.2em', marginTop: '4px' }}>ROBÓTICA</div>
          </div>

          {/* Gold corner accent */}
          <div style={{
            position: 'absolute', bottom: '-16px', left: '-16px',
            width: '80px', height: '80px',
            border: '2px solid var(--gold)',
            opacity: 0.4,
          }} />
        </div>

        {/* Right — content */}
        <div>
          <div data-aos="fade-left" data-aos-duration="900">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
                ESPECIALISTA
              </span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.15,
              marginBottom: '28px',
            }}>
              Diagnóstico preciso,{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>tratamento resolutivo.</span>
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              A Dra. Lara Veras é especialista em Coloproctologia e doenças do assoalho pélvico, com atuação focada em diagnóstico preciso e tratamento resolutivo.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '40px' }}>
              Sua prática inclui cirurgia robótica — tecnologia de ponta que permite maior precisão, menor trauma e recuperação mais rápida para condições que afetam diretamente a qualidade de vida das pacientes.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="150" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { icon: '◈', label: 'Coloproctologia' },
              { icon: '◈', label: 'Assoalho Pélvico' },
              { icon: '◈', label: 'Cirurgia Robótica' },
              { icon: '◈', label: 'Endometriose' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px', background: 'rgba(184,150,90,0.06)',
                border: '1px solid rgba(184,150,90,0.15)', borderRadius: '2px',
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '14px' }}>{item.icon}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-dark)', fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
