import Card from './Card'

export const Serviciostres = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 - Servicios */}
        <Card
          title="Nuestros servicios"
          subtitle="En minería y geología"
          variant="text-only"
          contentText='
            <h4>Diseño y planificación</h4>
            <p>Soluciones integrales para proyectos mineros y geológicos</p>
          '
          bgType="color"
          bgColor="bg-[#03A404A]"
          link="/productos" // Agregado
        />
        
        {/* Card 2 - Barrenación */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4>Barrenación y voladura</h4>
            <p>Técnicas especializadas para excavación y extracción minera</p>
          '
          bgType="image"
          bgImage="/bom.png"
          link="/productos" // Agregado
        />
        
        {/* Card 3 - Estudios */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4>Estudios topográficos</h4>
            <p>Análisis preciso del terreno para proyectos mineros</p>
          '
          bgType="color"
          bgColor="bg-[#03A404A]"
          link="/productos" // Agregado
        />
        
        {/* Card 4 - Gestión */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4>Gestión ambiental</h4>
            <p>Protocolos para minería sostenible y responsable</p>
          '
          bgType="color"
          bgColor="bg-[#03A404A]"
          link="/productos" // Agregado
        />
      </div>
    </section>
  )
}