'use client'
import dynamic from 'next/dynamic'
import Navbar from "../components/NavBar"
import { Footer } from '../components/Footer'
import ContactHero from '../components/ContactHero' // Importar el nuevo componente

// Carga dinámica del formulario
const ContactForm = dynamic(() => import('../components/ContactForm'), {
  ssr: false,
  loading: () => <div className="min-h-[500px] flex items-center justify-center">Cargando formulario...</div>
})

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
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
        padding: '20px',
        flexDirection: 'column'
      }}>
        <div>
          <h1>🚧 Sitio en mantenimiento / Fuera de servicio 🚧</h1>
          <p>El sitio estará disponible nuevamente una vez que se haya procesado el pago.</p>
          <p style={{ fontSize: '1rem', marginTop: '2rem' }}>Gracias por su paciencia.</p>
        </div>
      </div>

      {/* CONTENIDO ORIGINAL COMENTADO (para habilitar cuando se reciba el pago) */}
      {/*
      <Navbar />
      
      <div className=" pt-18 w-full ">
          <ContactHero />
        </div>
      
      <section className="flex-grow bg-[#A58A35] py-16">
        <div className="container  mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      
      <Footer />
      */}
    </main>
  )
}