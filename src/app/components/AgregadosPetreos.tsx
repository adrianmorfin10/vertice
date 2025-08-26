import Card from './Card' // Importamos como default

export const AgregadosPetreos = () => {
  return (
    <section className="">
      
      <div className="grid grid-cols-1  gap-6">
        <Card
          title="Agregegados petreos"
          subtitle="Productos de alta calidad para construcción"
          variant="both"
          bullets={[
            'Balastro Piedra caliza',
            'Grava ¾ Piedra caliza',
            'Grava 1 ½ Piedra caliza',
            'Arena cribada Piedra caliza'
          ]}
          ctaText="Ver más productos y servicios"
          bgType="image"
          bgImage="/truck.png"
          link="/productos" // Agregado
        />
      </div>
    </section>
  )
}