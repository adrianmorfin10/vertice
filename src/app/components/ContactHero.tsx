// components/ContactHero.tsx
'use client'
import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Fondo con overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-0">
        <Image
          src="/office.png" // Imagen de fondo
          alt="Oficina corporativa"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Contenido de texto */}
      <div className=" z-10 h-full flex flex-col justify-center items-center px-6 text-white">
        <div className=" w-full bg-black/10 backdrop-blur-md p-12 rounded-2xl ">
          {/* Título principal */}
          <h1 className="text-5xl font-light mb-12 text-center">
            Contacto
          </h1>
          
          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Teléfono */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-xl font-semibold">Teléfono</h3>
              </div>
              <p className="text-lg">+52 771 489 2302</p>
            </div>
            
            {/* Email */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold">E-mail</h3>
              </div>
              <p className="text-lg">contacto@mineriavertice.com</p>
            </div>
            
            {/* Oficina Corporativa */}
            <div className="flex flex-col items-center md:items-start md:col-span-2">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl font-semibold">Oficina Corporativa</h3>
              </div>
              <p className="text-lg text-center md:text-left">
                Torre Pletora interior 4N19<br />
                Zona Plateada, Pachuca, Hidalgo. CP 42084
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}