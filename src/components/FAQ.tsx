import { useState } from 'react'

const faqs = [
  {
    q: 'Como sei se preciso de cirurgia ou se existe outro tratamento?',
    a: 'Somente após avaliação clínica completa é possível saber. Muitos casos têm solução conservadora. Outros têm resultado muito melhor com cirurgia. A Dra. Lara explica cada opção com clareza para que você tome a decisão com segurança.',
  },
  {
    q: 'Minha constipação é grave o suficiente para consultar um especialista?',
    a: 'Se você já tentou dieta, hidratação e laxantes sem resultado duradouro, ou sente bloqueio, evacuação incompleta ou precisa de manobras para conseguir evacuar, sim. Isso pode ter uma causa funcional ou anatômica que precisa de investigação.',
  },
  {
    q: 'A ultrassonografia endoanal dói muito?',
    a: 'O exame é bem tolerado pela maioria dos pacientes. É realizado com uma sonda de pequeno diâmetro e causa apenas leve desconforto. Não requer sedação na maior parte dos casos e dura poucos minutos.',
  },
  {
    q: 'Homens também são atendidos?',
    a: 'Sim. Hemorroidas, fístulas, fissuras, constipação, doença inflamatória intestinal e disfunção do assoalho pélvico afetam homens e mulheres. Todos são bem-vindos.',
  },
  {
    q: 'Doença de Crohn tem cura?',
    a: 'Ainda não tem cura, mas tem controle. Com o tratamento adequado, é possível manter longos períodos sem sintomas e com qualidade de vida. O acompanhamento especializado é fundamental para evitar complicações.',
  },
  {
    q: 'O pós-operatório das cirurgias colorretais é muito difícil?',
    a: 'Depende do procedimento. Com técnicas minimamente invasivas, a maioria dos pacientes retoma atividades leves em poucos dias. A Dra. Lara orienta cada etapa da recuperação com detalhes desde a primeira consulta.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={{
        background: 'var(--off-white)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div data-aos="fade-up" data-aos-duration="800" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
              PERGUNTAS FREQUENTES
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
          }}>
            Dúvidas que chegam{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>com frequência</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 50}
              style={{
                background: '#fff',
                border: '1px solid',
                borderColor: open === i ? 'rgba(0,124,72,0.4)' : 'rgba(0,124,72,0.15)',
                borderRadius: '2px',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '22px 28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  color: 'var(--gold)',
                  fontSize: '20px',
                  flexShrink: 0,
                  transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  display: 'inline-block',
                }}>
                  +
                </span>
              </button>

              <div style={{
                maxHeight: open === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <div style={{
                  padding: '0 28px 22px',
                  borderTop: '1px solid rgba(0,124,72,0.1)',
                  paddingTop: '18px',
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-mid)',
                    lineHeight: 1.8,
                  }}>
                    {faq.a}
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
