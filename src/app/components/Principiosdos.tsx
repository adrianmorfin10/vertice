// components/Principios.tsx
'use client'
import Image from 'next/image'
import ContactForm from './ContactForm'

export function Principiosdos() {
  return (
    <div className="w-full">
      {/* Sección 1: SOSTENIBILIDAD AMBIENTAL */}
      <section className="flex flex-col lg:flex-row items-center min-h-screen pt-18 bg-[#242A34] text-white">
        <div className="lg:w-1/2 p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            SOSTENIBILIDAD AMBIENTAL
          </h2>
          <div className="space-y-6 text-lg">
            <p>
              Implementamos tecnologías y prácticas que minimicen el impacto
              ecológico, como la reducción de emisiones y uso eficiente del
              agua.
            </p>
            <p>
              Contamos con planes de cierre y restauración de minas para
              garantizar que las áreas explotadas puedan recuperarse.
            </p>
            <p>
              Gestionamos de forma adecuada los residuos para evitar la
              contaminación del suelo y agua.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center p-8">
          <div className="w-[250px] h-[370px] relative">
            <Image
              src="/sos.png"
              alt="Sostenibilidad Ambiental"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Sección 2: RESPONSABILIDAD SOCIAL */}
      <section className="flex flex-col lg:flex-row items-center min-h-screen bg-[#123356] text-white">
        <div className="lg:w-1/2 flex justify-center items-center p-8 order-2 lg:order-1">
          <div className="w-[250px] h-[370px] relative">
            <Image
              src="/res.png"
              alt="Responsabilidad Social"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-16 order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            RESPONSABILIDAD SOCIAL
          </h2>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Desarrollo comunitario</h3>
            <p className="text-lg">
              Contribuimos al desarrollo de las comunidades donde operamos mediante 
              proyectos de educación, salud e infraestructura, mejorando la calidad 
              de vida de los habitantes locales.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Cumplimiento de normativas</h3>
            <p className="text-lg">
              Aseguramos nuestras operaciones manteniendonos siempre apegados al marco 
              legal, trabajando con ética y respetando en todo momento los derechos 
              humanos y el medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: INNOVACIÓN Y EFICIENCIA */}
      <section className="flex flex-col lg:flex-row items-center min-h-screen bg-[#242A34] text-white">
        <div className="lg:w-1/2 p-8 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            INNOVACIÓN Y EFICIENCIA
          </h2>
          <p className="text-lg mb-8">
            Integramos tecnologías para monitoreo en tiempo real de
            las condiciones de nuestras minas, con la finalidad de
            mejorar la toma de decisiones informadas sobre la
            seguridad, el rendimiento y la eficiencia de las operaciones.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 mt-1 mr-3 text-[#A48830] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Minería inteligente</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mt-1 mr-3 text-[#A48830] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Extracción inteligente</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center p-8 ">
          <div className="w-[250px] h-[370px] relative flex items-center justify-center bg-gray-700 rounded-lg">
          <div className="w-[250px] h-[370px] relative">
            <Image
              src="/ino.png"
              alt="Responsabilidad Social"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="py-16 bg-[#A58A35]">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}