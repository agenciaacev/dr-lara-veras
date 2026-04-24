export default function Sintomas() {
  const sintomas = [
    {
      title: 'Incontinência fecal',
      desc: 'Perda involuntária de fezes ou gases, causando constrangimento e insegurança no dia a dia. Em casos mais avançados, a cirurgia pode restaurar o controle e devolver qualidade de vida.',
      icon: '◉',
    },
    {
      title: 'Constipação intestinal crônica',
      desc: 'Dificuldade persistente para evacuar, muitas vezes relacionada a alterações no funcionamento do assoalho pélvico. Quando o tratamento clínico não resolve, a abordagem cirúrgica pode ser indicada.',
      icon: '◉',
    },
    {
      title: 'Dor pélvica crônica',
      desc: 'Dor recorrente na região inferior do abdômen, frequentemente negligenciada ou mal diagnosticada. Alguns casos exigem correção cirúrgica para alívio definitivo.',
      icon: '◉',
    },
    {
      title: 'Endometriose profunda',
      desc: 'Pode comprometer o intestino e outros órgãos pélvicos, causando dor intensa e alterações intestinais. A cirurgia especializada permite a remoção dos focos da doença com mais precisão.',
      icon: '◉',
    },
    {
      title: 'Prolapso retal',
      desc: 'Sensação de "algo saindo" pelo ânus ou dificuldade para evacuar corretamente. Condição tratável, com excelentes resultados através de cirurgia minimamente invasiva.',
      icon: '◉',
    },
  ]

  return (
    <section
      id="condicoes"
      style={{
        background: 'var(--off-white)',
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
            maxWidth: '600px',
            margin: '0 auto 20px',
          }}>
            Sinais que{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>não devem</span>{' '}
            ser ignorados
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-light)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Se você convive com algum desses sintomas, é importante investigar. Na maioria dos casos, existe solução.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {sintomas.map((s, i) => (
            <div
              key={s.title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 80}
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
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px', marginTop: '2px', flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <h3 className="font-display" style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.75 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={sintomas.length * 80}
            style={{
              background: 'linear-gradient(135deg, var(--green-dark), #0f1f0f)',
              borderRadius: '2px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '20px',
            }}
          >
            <p className="font-display" style={{ fontSize: '24px', color: '#fff', fontStyle: 'italic', lineHeight: 1.3 }}>
              Não é normal sentir isso.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Muitas pessoas convivem com esses sintomas por anos, acreditando que fazem parte da rotina.
            </p>
            <a
              href="#cta"
              style={{
                background: 'var(--gold)',
                color: '#fff',
                padding: '14px 28px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; }}
            >
              BUSCAR AVALIAÇÃO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
