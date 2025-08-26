// components/MineríaHero.tsx
'use client'
import Image from 'next/image'

export default function MineriaHero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Fondo principal */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/invera.png" // Imagen de fondo principal
          alt="Minería en México"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      
      {/* Contenido de texto con fondo blurb.png */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 text-white">
        <div className="relative w-full p-8 h-[400px] md:p-12 rounded-2xl overflow-hidden">
          {/* Fondo del contenedor con blurb.png */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/blurb.png" // Imagen de blur como fondo del contenedor
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div> {/* Overlay para mejor contraste */}
          </div>
          
          {/* Contenido de texto */}
          <div className="relative z-10">
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left">
              La Importancia
              <br />
              de la Minería en México
            </h1>
            
            {/* Información - TODAS con font-lato text-xs font-light */}
            <div className="space-y-4">
              <p className="font-lato text-xs font-light">
                Representa el <strong className="font-semibold">inicio de todas las cadenas productivas industriales</strong> y está presente en toda actividad económica.
              </p>
              
              <p className="font-lato text-xs font-light">
                Es <strong className="font-semibold">esencial para la vida del ser humano</strong> que depende de la presencia de varios minerales y metales para su sobrevivencia.
              </p>
              
              <p className="font-lato text-xs font-light mt-8 pt-4 border-t border-white/20">
                <strong className="font-semibold text-sm">La minería es la palanca para el desarrollo de la humanidad.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}