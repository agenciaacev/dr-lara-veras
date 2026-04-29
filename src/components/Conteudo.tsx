import { useState } from 'react'

const items = [
  {
    title: 'O que é disfunção do assoalho pélvico e por que ela é mais comum do que você imagina',
    content: `O assoalho pélvico é um conjunto de músculos e ligamentos que sustenta bexiga, útero, vagina e reto. Quando esse suporte falha, seja por parto, envelhecimento, cirurgia prévia ou esforço repetitivo, surgem sintomas que afetam diretamente a rotina, a autoestima e os relacionamentos.

As causas mais comuns são partos vaginais, envelhecimento, cirurgias pélvicas anteriores, obesidade e esforço físico repetitivo. Homens também são afetados, especialmente após cirurgia de próstata.

Os problemas mais frequentes incluem incontinência urinária e fecal, prolapso de órgãos pélvicos, dor pélvica crônica, disfunção sexual e dificuldade evacuatória por disfunção muscular.

O tratamento pode ser conservador, com fisioterapia pélvica e medicação, ou cirúrgico quando os músculos e ligamentos precisam de reconstrução. Em muitos casos, as duas abordagens combinadas trazem os melhores resultados.`,
  },
  {
    title: 'Constipação crônica e dificuldade para evacuar: quando vai além do intestino preso',
    content: `Constipação não é apenas evacuar com pouca frequência. É também evacuar com esforço excessivo, sentir que o esvaziamento foi incompleto, precisar de manobras com as mãos para conseguir evacuar ou ter fezes muito ressecadas de forma crônica.

Quando isso acontece com regularidade, o intestino e o assoalho pélvico precisam de avaliação especializada, não apenas de mais fibra ou laxante.

Causas que vão além do hábito alimentar:

Disfunção evacuatória do assoalho pélvico: os músculos que deveriam relaxar durante a evacuação fazem o oposto e se contraem, criando um bloqueio funcional. Esse quadro tem nome, tem diagnóstico e tem tratamento.

Retocele: protrusão da parede retal em direção à vagina, comum em mulheres após partos. Cria sensação de bloqueio e em casos mais severos tem correção cirúrgica.

Intussuscepção retal: a parede do reto dobra sobre si mesma durante o esforço evacuatório, criando uma obstrução interna e evacuação incompleta crônica.

Megacólon ou megarreto: dilatação anormal do intestino grosso ou do reto, que perde a capacidade de se contrair adequadamente.

Constipação crônica reduz a qualidade de vida e aumenta o risco de hemorroidas, fissuras e outras complicações. O tratamento existe e começa com uma avaliação completa.`,
  },
  {
    title: 'Hemorroida, fístula e fissura: quando a cirurgia é a melhor solução',
    content: `Nem todo caso precisa de cirurgia. Mas alguns quadros não têm resolução definitiva sem um procedimento bem indicado.

Hemorroida grau III e IV: quando as hemorroidas já não retornam espontaneamente ao canal anal ou causam sangramento intenso e recorrente, a cirurgia é a solução mais eficaz. Com técnicas minimamente invasivas, a recuperação é muito mais confortável do que na cirurgia tradicional.

Fístula anal: canal anormal entre o canal anal e a pele ao redor que não fecha sozinho. Sem cirurgia, continua causando infecção, secreção e dor. A técnica depende da complexidade e localização.

Fissura anal crônica: a fissura que não cicatriza com tratamento clínico, geralmente por espasmo do esfíncter, tem resolução cirúrgica simples, eficaz e que preserva a continência.

Cisto pilonidal: infecção recorrente na região do cóccix exige remoção cirúrgica do trajeto. Técnicas modernas reduzem o tempo de cicatrização e o risco de recidiva.

A indicação cirúrgica correta faz toda a diferença. A Dra. Lara avalia cada caso com critério e indica cirurgia apenas quando é a melhor opção.`,
  },
  {
    title: 'Doença de Crohn e retocolite ulcerativa: o que são e como tratar',
    content: `A doença inflamatória intestinal engloba duas condições crônicas principais: a doença de Crohn e a retocolite ulcerativa. Ambas causam inflamação persistente no trato gastrointestinal e exigem acompanhamento especializado ao longo da vida.

Doença de Crohn: pode afetar qualquer parte do trato digestivo, da boca ao ânus. Causa dor abdominal, diarreia, perda de peso, fadiga e, em muitos casos, manifestações perianais como fístulas e abscessos.

Retocolite ulcerativa: afeta exclusivamente o cólon e o reto, causando inflamação com úlceras na mucosa intestinal. Os principais sintomas são diarreia com sangue, urgência evacuatória e dor abdominal. Nos casos refratários ao tratamento clínico, a cirurgia pode ser curativa.

Quando suspeitar de doença inflamatória intestinal: diarreia crônica com ou sem sangue por mais de quatro semanas, dor abdominal recorrente sem causa definida, perda de peso sem explicação, fístulas ou abscessos perianais de repetição e histórico familiar de Crohn ou retocolite são sinais que pedem avaliação especializada.

O diagnóstico precoce e o acompanhamento correto fazem diferença real na progressão da doença e na qualidade de vida do paciente.`,
  },
  {
    title: 'Ultrassonografia endoanal: o exame que enxerga o que outros não conseguem',
    content: `A ultrassonografia endoanal é um exame de imagem realizado com uma sonda de pequeno diâmetro introduzida no canal anal. Ela permite visualizar com precisão as estruturas internas do ânus, do esfíncter e do assoalho pélvico.

Para que serve: avaliar lesões no esfíncter anal após partos ou cirurgias, identificar a localização de fístulas anais complexas, investigar abscessos perianais, avaliar tumores do canal anal e do reto baixo, auxiliar no diagnóstico de incontinência fecal e orientar o planejamento cirúrgico com mais precisão.

Como é feito: o exame é realizado no consultório, sem necessidade de sedação na maioria dos casos. A sonda é introduzida delicadamente e gera imagens em tempo real das camadas musculares do canal anal. O desconforto é mínimo e o procedimento dura poucos minutos.

A indicação é feita pela Dra. Lara após a avaliação clínica, apenas nos casos em que a imagem vai mudar ou refinar a conduta. Quando bem indicado, evita diagnósticos imprecisos, cirurgias desnecessárias e tratamentos que não funcionam.`,
  },
]

export default function Conteudo() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="conteudo"
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
              CONTEÚDO EDUCATIVO
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            Entenda sua condição{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>antes de decidir</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.7 }}>
            Informação de qualidade é parte do cuidado.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {items.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 60}
              style={{
                background: '#fff',
                border: '1px solid rgba(0,124,72,0.15)',
                borderRadius: '2px',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
                borderColor: open === i ? 'rgba(0,124,72,0.4)' : 'rgba(0,124,72,0.15)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '24px 28px',
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
                <span className="font-display" style={{
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.4,
                }}>
                  {item.title}
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
                display: 'grid',
                gridTemplateRows: open === i ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.4s ease',
              }}>
                <div style={{ overflow: 'hidden' }}>
                <div style={{
                  padding: '0 28px 28px',
                  borderTop: '1px solid rgba(0,124,72,0.12)',
                  paddingTop: '20px',
                }}>
                  {item.content.split('\n\n').map((para, pi) => (
                    <p key={pi} style={{
                      fontSize: '14px',
                      color: 'var(--text-mid)',
                      lineHeight: 1.8,
                      marginBottom: pi < item.content.split('\n\n').length - 1 ? '16px' : '0',
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
