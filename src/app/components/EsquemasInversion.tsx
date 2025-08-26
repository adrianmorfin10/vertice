// components/EsquemasInversion.tsx
'use client'

export default function EsquemasInversion() {
  const esquemas = [
    {
      titulo: "Desde $100,000 hasta $249,000",
      puntos: [
        "Rendimiento Fijo del 15% Anual",
        "Dividido en 4 Pagos Trimestrales",
        "Plazo a 1 Año, al finalizar retorno de capital"
      ]
    },
    {
      titulo: "Desde $250,000 hasta $499,000",
      puntos: [
        "Rendimiento Fijo del 17% Anual",
        "Dividido en 4 Pagos Trimestrales",
        "Plazo a 1 Año, al finalizar retorno de capital"
      ]
    },
    {
      titulo: "A partir de $500,000 en adelante",
      puntos: [
        "Rendimiento Fijo del 20% Anual",
        "Dividido en 4 pagos Trimestrales",
        "Plazo a 1 Año, al finalizar retorno de capital"
      ]
    }
  ];

  return (
    <section className="w-full py-16 bg-[#242A34] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Texto a la izquierda */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Esquemas de Inversión</h2>
            <p className="text-lg mb-4">
              Nuestra visión es el crecimiento sostenible
              a través de la integración y optimización
              de nuestros procesos productivos.
            </p>
            <p className="text-lg">
              Actualmente, participamos en el sector
              primario y secundario.
            </p>
          </div>

          {/* Rectángulos a la derecha */}
          <div className="lg:w-1/2 space-y-6">
            {esquemas.map((esquema, index) => (
              <div key={index} className="bg-[#1B1D21] p-6 rounded-l-2xl border-r-1 border-[#3A404A]">
                <h3 className="text-xl font-bold text-[#A58A35] mb-3">{esquema.titulo}</h3>
                <ul className="space-y-2">
                  {esquema.puntos.map((punto, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A58A35] mt-2 mr-2 flex-shrink-0"></span>
                      <span className="font-lato font-light">{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}