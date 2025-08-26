import Card from './Card'

export const Serviciosdos = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <Card
          title="Nuestros productos"
          subtitle="Agregados pétreos finos y gruesos"
          variant="text-only"
          contentText='
            <h4>Balastro piedra caliza</h4>
            <p>Material seleccionado para construcción de vías con granulometría controlada</p>
          '
          bgType="color"
          bgColor="bg-[#A58A35]"
        />
        
        {/* Card 2 */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4>Grava 3/4 Piedra caliza</h4>
            <p>Agregado ideal para concreto estructural y prefabricados de alta resistencia</p>
          '
          bgType="color"
          bgColor="bg-[#03A404A]"
        />
        
        {/* Card 3 */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4>Grava 1 1/2 Piedra caliza</h4>
            <p>Solución perfecta para sistemas de drenaje y rellenos estructurales</p>
          '
          bgType="color"
          bgColor="bg-[#03A404A]"
        />
        
        {/* Card 4 */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4>Arena cribada Piedra caliza</h4>
            <p>Material filtrado para morteros, acabados finos y mezclas de precisión</p>
          '
          bgType="color"
          bgColor="bg-[#03A404A]"
        />
      </div>
    </section>
  )
}