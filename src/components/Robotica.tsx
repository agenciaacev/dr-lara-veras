export default function Robotica() {
  const beneficios = [
    { num: '01', title: 'Maior precisão', desc: 'Movimentos cirúrgicos com precisão milimétrica, reduzindo o risco de complicações.' },
    { num: '02', title: 'Menor dor', desc: 'Pós-operatório significativamente menos doloroso em comparação a cirurgias convencionais.' },
    { num: '03', title: 'Recuperação rápida', desc: 'Retorno às atividades muito mais veloz, com menos tempo de internação.' },
    { num: '04', title: 'Menos complicações', desc: 'Tecnologia que minimiza o trauma tecidual e reduz o risco de infecções e complicações.' },
  ]

  return (
    <section
      id="tratamentos"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,124,72,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          
          {/* Left content */}
          <div>
            <div data-aos="fade-right" data-aos-duration="900">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
                  TECNOLOGIA AVANÇADA
                </span>
              </div>

              <h2 className="font-display" style={{
                fontSize: 'clamp(30px, 4vw, 50px)',
                fontWeight: 700,
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                marginBottom: '24px',
              }}>
                Cirurgia robótica:{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>mais precisão,</span>{' '}
                menos trauma.
              </h2>

              <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '40px' }}>
                Tecnologia de ponta aplicada para oferecer o melhor resultado cirúrgico possível com maior segurança para a paciente e resultados superiores para condições complexas do assoalho pélvico e colorretal.
              </p>
            </div>

            <div data-aos="fade-right" data-aos-duration="900" data-aos-delay="150">
              <a
                href="#cta"
                style={{
                  background: 'var(--text-dark)',
                  color: '#fff',
                  padding: '16px 36px',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: '50px',
                  transition: 'all 0.3s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--text-dark)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                SAIBA SE MEU CASO TEM SOLUÇÃO
              </a>
            </div>
          </div>

          {/* Right — benefits list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {beneficios.map((b, i) => (
              <div
                key={b.num}
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay={i * 100}
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  padding: '24px',
                  background: '#fff',
                  border: '1px solid rgba(0,124,72,0.12)',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,124,72,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,124,72,0.12)'; }}
              >
                <span className="font-display" style={{
                  fontSize: '32px',
                  fontWeight: 900,
                  color: 'rgba(0,124,72,0.2)',
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {b.num}
                </span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tratamentos > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
