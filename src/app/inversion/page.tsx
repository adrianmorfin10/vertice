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
      {/* Barra de navegación */}
      <Navbar />
      
      {/* Componente Hero de contacto */}
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

      
      {/* Sección principal con el formulario */}
      <section className="flex-grow bg-[#A58A35] py-16">
        <div className="container  mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      
      {/* Pie de página */}
      <Footer />
    </main>
  )
}