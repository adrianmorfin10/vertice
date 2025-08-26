import Card from './Card'

export const Servicioscuatro = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 - Servicios */}
        <Card
          title="Invierte hoy y asegura un futuro"
          subtitle=""
          variant="text-only"
          contentText='
            <h4 class="mb-4">Proceso sencillo</h4>
            <p class="space-y-2">
              <span class="block">1. Selecciona tu Esquema ideal</span>
              <span class="block">2. Proporciona tus Datos</span>
              <span class="block">3. Firma y confirma tu Inversión</span>
            </p>
          '
          bgType="color"
          bgColor="bg-[#A48830]"
          link="/productos"
        />
        
        {/* Card 2 - Barrenación */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4 class="mb-4">Respaldo Legal</h4>
            <p class="space-y-2">
              <span class="block">Firma de forma segura con Plataforma FAD*</span>
              <span class="block">· Seguridad Jurídica</span>
              <span class="block">· Rapidez y Comodidad</span>
              <span class="block">· Transparencia Total</span>
            </p>
          '
          bgType="color"
          bgColor="bg-[#123356]"
          link="/productos"
        />
        
        {/* Card 3 - Estudios */}
        <Card
          title=""
          subtitle=""
          variant="text-only"
          contentText='
            <h4 class="mb-4">Rendimiento Fijo</h4>
            <p class="space-y-2">
              <span class="block">· Rentabilidad Estable</span>
              <span class="block">· Sin Riesgos Sorprendentes</span>
              <span class="block">· Pagos Puntuales</span>
            </p>
          '
          bgType="color"
          bgColor="bg-[#]"
          link="/productos"
        />
      </div>
    </section>
  )
}