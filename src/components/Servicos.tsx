export default function Servicos() {
  const cards = [
    {
      title: 'Hemorroidas, fístulas e fissuras',
      text: 'Diagnóstico preciso e tratamento cirúrgico moderno para quem convive com dor, sangramento e desconforto anal.',
      icon: '✦',
    },
    {
      title: 'Constipação e dificuldade evacuatória',
      text: 'Investigação completa das causas funcionais e anatômicas quando dieta e laxante já não resolvem mais.',
      icon: '✦',
    },
    {
      title: 'Disfunção do assoalho pélvico',
      text: 'Tratamento clínico e cirúrgico para incontinência, prolapso de órgãos e dor pélvica crônica em homens e mulheres.',
      icon: '✦',
    },
    {
      title: 'Doença inflamatória intestinal',
      text: 'Acompanhamento especializado da doença de Crohn e da retocolite ulcerativa, incluindo complicações perianais e indicações cirúrgicas.',
      icon: '✦',
    },
    {
      title: 'Prolapso retal e de órgãos pélvicos',
      text: 'Avaliação e correção cirúrgica quando o reto, a bexiga ou o útero perdem o suporte e comprometem a qualidade de vida.',
      icon: '✦',
    },
    {
      title: 'Cirurgia minimamente invasiva',
      text: 'Procedimentos modernos com menor dor, recuperação mais rápida e resultados duradouros para as principais condições colorretais.',
      icon: '✦',
    },
  ]

  return (
    <section
      id="servicos"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div data-aos="fade-up" data-aos-duration="800" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
              CONDIÇÕES TRATADAS
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            maxWidth: '600px',
            margin: '0 auto 20px',
          }}>
            O que a Dra. Lara{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>trata e resolve</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-light)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Encontre sua condição e entenda que existe um caminho para você.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 70}
              style={{
                background: '#fff',
                border: '1px solid rgba(184,150,90,0.15)',
                borderRadius: '2px',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(184,150,90,0.5)'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 40px rgba(184,150,90,0.12)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(184,150,90,0.15)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
              }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '16px', marginTop: '4px', flexShrink: 0 }}>{card.icon}</span>
                <div>
                  <h3 className="font-display" style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.75 }}>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
