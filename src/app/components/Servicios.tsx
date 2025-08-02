import Card from './Card' // Importamos como default

export const Servicios = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Manufactura y comercialización"
          subtitle="Productos duraderos y eficientes para instalación, tratamiento de superficies y mejora estética en interiores y exteriores."
          variant="both"
          ctaText="Conocer más"
          bgType="color"
          bgColor="bg-[#A58A35]"
        />
        
        <Card
          title="Soluciones integrales"
          subtitle="Productos duraderos y eficientes para instalación, tratamiento de superficies y mejora estética en interiores y exteriores."
          variant="both"
          ctaText="Conocer más"
          bgType="color"
          bgColor="bg-[#03A404A]"
        />
        
        
        <Card
          title="Esquemas de inversión"
          subtitle="Productos duraderos y eficientes para instalación, tratamiento de superficies y mejora estética en interiores y exteriores."
          variant="both"
          ctaText="Ver esquemas"
          bgType="color"
          bgColor="bg-[#03A404A]"
        />
      </div>
    </section>
  )
}