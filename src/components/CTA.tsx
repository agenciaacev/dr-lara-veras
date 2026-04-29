export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(135deg, var(--green-dark) 0%, #031a0d 60%, #051f12 100%)',
        padding: 'clamp(80px, 10vw, 140px) 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '300px', height: '300px',
        border: '1px solid rgba(0,124,72,0.12)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '200px', height: '200px',
        border: '1px solid rgba(0,124,72,0.08)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(0,124,72,0.07) 0%, transparent 60%)`,
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        <div data-aos="fade-up" data-aos-duration="900">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(0,124,72,0.5)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
              AVALIAÇÃO ESPECIALIZADA
            </span>
            <div style={{ width: '40px', height: '1px', background: 'rgba(0,124,72,0.5)' }} />
          </div>

          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Você já conviveu{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>tempo demais com isso.</span>
          </h2>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            marginBottom: '56px',
            maxWidth: '580px',
            margin: '0 auto 56px',
          }}>
            Agende sua consulta com a Dra. Lara Veras. O primeiro passo é uma conversa. O resto a gente resolve juntos.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(0,124,72,0.2)',
            borderRadius: '4px',
            padding: '48px 40px',
            backdropFilter: 'blur(10px)',
          }}>
            <p className="font-display" style={{ fontSize: '20px', color: '#fff', fontStyle: 'italic', marginBottom: '32px' }}>
              Clique abaixo e fale com a equipe da Dra. Lara Veras
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
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
                  width: '100%',
                  maxWidth: '400px',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0,124,72,0.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,124,72,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,124,72,0.3)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                FALAR AGORA PELO WHATSAPP
              </a>

              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                Atendimento sigiloso e humanizado · Coloproctologista · CRM 13899 / RQE 9165
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
