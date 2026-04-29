export default function Footer() {
  return (
    <footer style={{
      background: '#031a0d',
      padding: '48px 32px',
      borderTop: '1px solid rgba(0,124,72,0.15)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '24px',
      }}>
        <div>
          <div className="font-display" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', color: '#fff' }}>
            DRA. LARA VERAS
          </div>
          <div style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--gold)', marginTop: '4px' }}>
            COLOPROCTOLOGIA · ASSOALHO PÉLVICO
          </div>
        </div>

        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
          © {new Date().getFullYear()} Dra. Lara Veras · Todos os direitos reservados
        </div>

        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
          CRM 13899 · RQE 9165
        </div>
      </div>
    </footer>
  )
}
