export default function ComoFunciona() {
  const passos = [
    {
      num: '01',
      title: 'Você manda uma mensagem no WhatsApp',
      desc: 'Nossa equipe responde com agilidade e agenda sua consulta.',
    },
    {
      num: '02',
      title: 'Você vem para a consulta',
      desc: 'A Dra. Lara ouve sua história com atenção, sem pressa e sem julgamento.',
    },
    {
      num: '03',
      title: 'Diagnóstico preciso',
      desc: 'Exames complementares são solicitados apenas quando necessários para definir o melhor tratamento.',
    },
    {
      num: '04',
      title: 'Plano de tratamento personalizado',
      desc: 'Clínico ou cirúrgico, decidido com clareza e junto com você em cada etapa.',
    },
  ]

  return (
    <section
      id="como-funciona"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,124,72,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div data-aos="fade-up" data-aos-duration="800" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
              DO PRIMEIRO CONTATO AO TRATAMENTO
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
          }}>
            Simples{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>assim.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {passos.map((passo, i) => (
            <div
              key={passo.num}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 100}
              style={{
                background: '#fff',
                border: '1px solid rgba(0,124,72,0.12)',
                borderRadius: '2px',
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,124,72,0.4)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,124,72,0.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
            >
              <span className="font-display" style={{
                fontSize: '52px',
                fontWeight: 900,
                color: 'rgba(0,124,72,0.12)',
                lineHeight: 1,
                display: 'block',
                marginBottom: '20px',
              }}>
                {passo.num}
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '10px', lineHeight: 1.4 }}>
                {passo.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>
                {passo.desc}
              </p>
              {i < passos.length - 1 && (
                <div style={{
                  position: 'absolute', top: '44px', right: '-13px',
                  fontSize: '18px', color: 'var(--gold)', opacity: 0.4,
                  zIndex: 2,
                }}>→</div>
              )}
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-duration="800" style={{ textAlign: 'center' }}>
          <a
            href="https://api.whatsapp.com/send/?phone=5585996508580&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+com+a+Dra.+Lara+Veras&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--gold)',
              color: '#fff',
              padding: '18px 56px',
              fontSize: '13px',
              letterSpacing: '0.2em',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '50px',
              transition: 'all 0.3s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 32px rgba(0,124,72,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            AGENDAR MINHA CONSULTA PELO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
