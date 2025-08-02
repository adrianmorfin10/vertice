'use client';
import Image from 'next/image';

export const Principios = () => {
  return (
    <section className="">
      <div className="">
       
        
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Card izquierda - Fondo blanco */}
          <div className="bg-white text-black p-8 ">
            <h3 className="text-3xl font-space-grotesk font-light mb-6">Nuestros principios</h3>
            <p className="text-lg font-lato mb-8">Sostenibilidad ambiental y responsabilidad social</p>
            
            <ul className="space-y-6">
              <li>
                <h4 className="text-xl font-space-grotesk font-medium">SOSTENIBILIDAD AMBIENTAL</h4>
                <p className="font-lato">Implementamos tecnologías y prácticas que minimicen el impacto ecológico, como la reducción de emisiones y uso eficiente del agua.</p>
              </li>
              <li>
                <h4 className="text-xl font-space-grotesk font-medium">RESPONSABILIDAD SOCIAL</h4>
                <p className="font-lato">Operamos con ética y ley, desarrollando comunidades mediante proyectos de educación, salud e infraestructura.</p>
              </li>
              <li>
                <h4 className="text-xl font-space-grotesk font-medium">INNOVACIÓN Y EFICIENCIA</h4>
                <p className="font-lato">Monitoreamos minas en tiempo real para operar con seguridad, eficiencia y mejores decisiones.</p>
              </li>
            </ul>
          </div>

          {/* Card derecha - Con imagen */}
          <div className="relative rounded-lg overflow-hidden min-h-[400px]">
            <Image 
              src="/inver.png" 
              alt="Inversión sostenible"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-8 text-center">
              <h3 className="text-4xl font-space-grotesk font-light mb-4">Invierte en un futuro inteligente</h3>
              <p className="text-8xl font-space-grotesk font-bold mb-8">15%</p>
              <p className="text-xl font-lato">Rendimiento anual promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}