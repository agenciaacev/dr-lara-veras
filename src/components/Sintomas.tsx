export default function Sintomas() {
  const sintomas = [
    'Hemorroidas com dor, sangramento ou prolapso frequente',
    'Fissura anal que não cicatriza mesmo com tratamento',
    'Fístula anal com secreção, dor e infecções que voltam sempre',
    'Sensação de bloqueio, esforço excessivo ou evacuação incompleta',
    'Constipação crônica que não melhora com dieta nem medicação',
    'Incontinência fecal ou urinária que constrange e limita sua rotina',
    'Sensação de pressão ou de que algo está "saindo" pela vagina ou reto',
    'Diarreia com sangue, dor abdominal recorrente ou perda de peso sem explicação',
    'Dor pélvica crônica sem diagnóstico definido',
    'Cisto pilonidal com infecções repetidas',
  ]

  return (
    <section
      id="condicoes"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div data-aos="fade-up" data-aos-duration="800" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
              SINAIS DE ALERTA
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            maxWidth: '620px',
            margin: '0 auto 20px',
          }}>
            Seu corpo está mandando{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>sinais.</span>{' '}
            Não ignore.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-light)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Muitos desses problemas têm solução definitiva. O que atrasa o resultado é o diagnóstico tardio.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="sintomas-grid">
          {sintomas.map((s, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 60}
              style={{
                background: '#fff',
                border: '1px solid rgba(184,150,90,0.15)',
                borderRadius: '2px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(184,150,90,0.5)'
                el.style.transform = 'translateX(4px)'
                el.style.boxShadow = '0 4px 20px rgba(184,150,90,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(184,150,90,0.15)'
                el.style.transform = 'translateX(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--gold)', flexShrink: 0, marginTop: '7px',
              }} />
              <span style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.6 }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="sintomas-cta" style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, var(--green-dark), #0f1f0f)',
          borderRadius: '2px',
          padding: '48px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <p className="font-display" style={{
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: '#fff',
            fontStyle: 'italic',
            lineHeight: 1.4,
            maxWidth: '520px',
          }}>
            Se você se identificou com qualquer um desses sintomas, a avaliação com a Dra. Lara Veras pode mudar sua qualidade de vida.
          </p>
          <a
            href="https://wa.me/5585999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="sintomas-cta-btn"
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
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            QUERO AGENDAR MINHA AVALIAÇÃO
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sintomas-grid { grid-template-columns: 1fr !important; }
          .sintomas-cta { flex-direction: column !important; align-items: stretch !important; padding: 32px 24px !important; }
          .sintomas-cta-btn { white-space: normal !important; text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </section>
  )
}
