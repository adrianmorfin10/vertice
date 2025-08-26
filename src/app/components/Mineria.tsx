// components/Mineria.tsx
'use client'

export default function Mineria() {
  const datos = [
    {
      icono: "/uno.png",
      texto: "Representa el 2.3% del PIB Nacional y el 8.1% del PIB industrial."
    },
    {
      icono: "/dos.png",
      texto: "Genera 379,000 empleos directos y 2.27 millones de empleos indirectos."
    },
    {
      icono: "/tres.png",
      texto: "Es el séptimo generador de divisas en el país: $18,737 MUSD."
    },
    {
      icono: "/cuatro.png",
      texto: "Es una de las actividades económicas mejor pagadas en el mundo."
    },
    {
      icono: "/cinco.png",
      texto: "Es uno de los sectores económicos más regulados en el país."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#242A34] text-white">
      <div className="container mx-auto px-4">
        {/* Título principal alineado a la izquierda */}
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-white">
          Minería como actividad esencial
        </h2>
        
        {/* Contenedor horizontal para los 5 elementos */}
        <div className="flex flex-col md:flex-row justify-between gap-4 max-w-6xl mx-auto">
          {datos.map((dato, index) => (
            <div 
              key={index} 
              className="flex-1 min-h-[180px] bg-[#242A34] border-l-1 border-[#3A404A] rounded-r-2xl p-4 flex flex-col justify-center"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icono */}
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img 
                    src={dato.icono} 
                    alt={`Icono ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Texto con partes resaltadas */}
                <p className="font-lato text-sm font-light text-white">
                  {dato.texto.split(/(\d+\.?\d*%|\d+,?\d+|\$\d+[\s\w\.]+|actividades económicas|sectores económicos)/).map((part, i) => {
                    // Resaltar números, porcentajes, montos y términos específicos
                    if (/\d+\.?\d*%/.test(part) || /\d+,?\d+/.test(part) || /\$\d+[\s\w\.]+/.test(part) || 
                        part === "actividades económicas" || part === "sectores económicos") {
                      return <span key={i} className="font-lato font-bold text-[#A58A35]">{part}</span>;
                    }
                    return part;
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}