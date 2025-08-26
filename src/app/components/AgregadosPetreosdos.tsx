import Image from 'next/image';

export const AgregadosPetreosdos = () => {
  return (
    <section className="relative">
      {/* Card contenedora */}
      <div className="relative min-h-[500px] overflow-hidden border border-[#3A404A]">
        {/* Fondo con imagen */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/truck.png" 
            alt="Camión de agregados pétreos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-20 p-8 text-white h-full flex flex-col">
          {/* Encabezado */}
          <div className="mb-8">
            <h3 className="text-3xl font-space-grotesk font-light mb-4">
              Manufactura y comercialización
            </h3>
            <p className="text-lg font-lato font-light max-w-2xl">
              Adaptados a las necesidades de cada proyecto de construcción, contamos con un equipo especializado en la industria para garantizar durabilidad y calidad.
            </p>
          </div>

          {/* Contenido dividido en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto">
            {/* Columna 1 - Mezcla asfáltica */}
            <div>
              <h4 className="text-2xl font-space-grotesk font-light mb-4">
                Mezcla asfáltica
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                  <span className="font-lato font-light">Producción</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                  <span className="font-lato font-light">Comercialización</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                  <span className="font-lato font-light">Aplicación</span>
                </li>
              </ul>
            </div>

            {/* Columna 2 - Concreto premezclado */}
            <div>
              <h4 className="text-2xl font-space-grotesk font-light mb-4">
                Concreto premezclado
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                  <span className="font-lato font-light">Fabricación</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                  <span className="font-lato font-light">Suministro</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                  <span className="font-lato font-light">Distribución</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}