import drLaraJaleco from '../assets/dr-lara-jaleco.webp'
import drLaraCirugia from '../assets/dr-lara-cirugia.jpg'

export default function Sobre() {
  const selos = [
    { icon: '◈', label: 'Professora da UFC' },
    { icon: '◈', label: 'Presidente da SOBRACIL' },
    { icon: '◈', label: 'Cirurgia Minimamente Invasiva' },
    { icon: '◈', label: 'Baseado em Evidências' },
  ]

  return (
    <section
      id="sobre"
      style={{
        background: 'var(--off-white)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        
        {/* Left — overlapping photos */}
        <div data-aos="fade-right" data-aos-duration="1000" style={{ position: 'relative', height: '620px' }}>

          <div className="sobre-foto-tras" style={{
            position: 'absolute',
            bottom: 0, right: '-20px',
            width: '58%',
            height: '65%',
            borderRadius: '2px',
            overflow: 'hidden',
            boxShadow: '8px 8px 32px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,124,72,0.2)',
          }}>
            <img
              src={drLaraCirugia}
              alt="Dra. Lara Veras em cirurgia"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          <div className="sobre-foto-frente" style={{
            position: 'absolute',
            top: 0, left: '-20px',
            width: '58%',
            height: '70%',
            borderRadius: '2px',
            overflow: 'hidden',
            boxShadow: '12px 12px 40px rgba(0,0,0,0.2)',
            border: '2px solid #fff',
            zIndex: 2,
          }}>
            <img
              src={drLaraJaleco}
              alt="Dra. Lara Veras"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          <div style={{
            position: 'absolute', bottom: '-16px', left: '-16px',
            width: '72px', height: '72px',
            border: '2px solid var(--gold)',
            opacity: 0.35,
            zIndex: 0,
          }} />

          <div style={{
            position: 'absolute', top: '-12px', right: '-12px',
            width: '72px', height: '72px',
            border: '2px solid var(--gold)',
            opacity: 0.2,
            zIndex: 0,
          }} />
        </div>

        {/* Right — content */}
        <div>
          <div data-aos="fade-left" data-aos-duration="900">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
                QUEM VAI CUIDAR DE VOCÊ
              </span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              lineHeight: 1.15,
              marginBottom: '28px',
            }}>
              Domínio técnico{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>e escuta real.</span>
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              A Dra. Lara Veras é coloproctologista com especialização em assoalho pélvico e técnicas minimamente invasivas. Professora ativa da Universidade Federal do Ceará, forma os especialistas da próxima geração.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '40px' }}>
              Como presidente da SOBRACIL, representa os maiores nomes da cirurgia laparoscópica e robótica do Brasil. Mais do que títulos, o que define seu atendimento é a combinação entre domínio técnico cirúrgico e uma escuta que muitos pacientes descrevem como a primeira vez em que se sentiram realmente compreendidos.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="150" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {selos.map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px', background: 'rgba(0,124,72,0.06)',
                border: '1px solid rgba(0,124,72,0.15)', borderRadius: '2px',
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
          .sobre-foto-frente { width: 62% !important; }
          .sobre-foto-tras { width: 62% !important; }
        }
      `}</style>
    </section>
  )
}
