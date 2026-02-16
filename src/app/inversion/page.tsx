'use client'
import dynamic from 'next/dynamic'
import Navbar from "../components/NavBar"
import { Footer } from '../components/Footer'
import MineriaHero from '../components/MineriaHero' // Importar el nuevo componente
import Mineria from '../components/Mineria'
import NuestrosProyectos from '../components/Proyectos'
import { Servicioscuatro } from '../components/Servicioscuatro'
import EsquemasInversion from '../components/EsquemasInversion'

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Sitio en mantenimiento / Fuera de servicio 🚧</h1>
          <p className="text-xl text-gray-600 mb-8">El sitio estará disponible nuevamente una vez que se haya procesado el pago.</p>
          <p className="text-sm text-gray-500">Gracias por su paciencia.</p>
        </div>
      </div>

      {/* CONTENIDO ORIGINAL COMENTADO (para habilitar cuando se reciba el pago) */}
      {/*
      <Navbar />
      
      <div className=" pt-18 w-full ">
          <MineriaHero />
        </div>
        <div className=" pt-18 w-full ">
          <Mineria/>
        </div>
        <div className=" pt-18 w-full ">
          <NuestrosProyectos/>
        </div>
        <div className="w-full ">
          <Servicioscuatro/>
        </div>
        <div className="w-full ">
          <EsquemasInversion/>
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