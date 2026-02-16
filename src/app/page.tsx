

export default function Home() {
  return (
    <main>
      {/* =====================================================
          SITIO FUERA DE SERVICIO HASTA RECIBIR PAGO
          Cuando se confirme el pago, eliminar este bloque de 
          comentarios y el mensaje temporal, y descomentar el 
          contenido original.
          ===================================================== */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '2rem',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <h1>🚧 Sitio en mantenimiento / Fuera de servicio 🚧</h1>
          <p>El sitio estará disponible nuevamente una vez que se haya procesado el pago.</p>
          <p style={{ fontSize: '1rem', marginTop: '2rem' }}>Gracias por su paciencia.</p>
        </div>
      </div>

    </main>
  )
}