// components/NuestrosProyectos.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NuestrosProyectos() {
  return (
    <section className="w-full py-16 bg-[#242A34] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contenido izquierdo - Texto y CTA */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-6 text-white">
              Nuestros proyectos
            </h2>
            
            <div className="space-y-4 text-white mb-8">
              <p>
                Actualmente contamos con dos minas
                en desarrollo en la zona centro del país
                especializadas en la extracción y producción
                de grava y arena de caliza para la industria
                de la construcción.
              </p>
              
              <p>
                Nuestra operación está respaldada por maquinaria
                especializada y equipo altamente capacitado lo que
                nos permite una capacidad de producción mensual
                aproximada de 70,000 toneladas.
              </p>
            </div>
            
            <Link 
              href="/ubicaciones" 
              className="inline-block px-8 py-3 bg-[#A58A35] text-white rounded-lg hover:bg-[#8a6e2d] transition-colors"
            >
              Ver ubicaciones
            </Link>
          </div>
          
          {/* Contenido derecho - Imagen */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/proyect.png"
                alt="Nuestros proyectos mineros"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Sección inferior - Cadena de valor */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          {/* Contenedor izquierdo - Sectores */}
          <div className="lg:w-1/2 space-y-4">
            {/* Sector 1 */}
            <div className="flex p-6 bg-[#123356] text-white rounded-l-2xl">
              <div className="text-5xl font-bold mr-4 ">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sector primario</h3>
                <p className="font-light">Extracción de materia prima (Piedra Caliza)</p>
              </div>
            </div>
            
            {/* Sector 2 */}
            <div className="flex p-6 bg-[#123356] text-white rounded-l-2xl">
              <div className="text-5xl font-bold mr-4 ">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sector secundario</h3>
                <p className="font-light">Transformación de la materia prima en agregados para la construcción. (Grava y arena)</p>
              </div>
            </div>
            
            {/* Sector 3 */}
            <div className="flex p-6 bg-[#1B1D21] text-white">
              <div className="text-5xl font-bold mr-4 text-white">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sector terciario</h3>
                <p className="font-light">Productos terminados (Concreto, Asfalto, Adhesivos y Recubrimientos)</p>
              </div>
            </div>
          </div>
          
          {/* Contenedor derecho - Información cadena de valor */}
          <div className="lg:w-1/2  p-8 rounded-2xl order-first lg:order-last">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Integrados a la cadena de valor
            </h3>
            <p className="text-white">
              Nuestra visión es el crecimiento sostenible
              a través de la integración y optimización
              de nuestros procesos productivos.
              Actualmente, participamos en el sector
              primario y secundario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}