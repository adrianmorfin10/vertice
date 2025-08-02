'use client'
import Image from 'next/image'

// Definimos las props primero
type CardProps = {
  title: string
  subtitle: string
  variant: 'cta' | 'bullets' | 'both'
  bullets?: string[]
  ctaText?: string
  bgType: 'color' | 'image'
  bgColor?: string
  bgImage?: string
}

// Exportamos como default
export default function Card({
  title,
  subtitle,
  variant,
  bullets = [],
  ctaText = 'Ver más',
  bgType,
  bgColor = 'bg-gray-800',
  bgImage = '/default-bg.jpg'
}: CardProps) {
  return (
    <div className={`min-h-[600px] flex flex-col justify-between  overflow-hidden relative border-r border-[#3A404A] ${bgType === 'image' ? 'text-white' : ''}`}>
      
      {/* Fondo */}
      {bgType === 'image' ? (
        <div className="absolute inset-0 z-0">
          <Image src={bgImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
      ) : (
        <div className={`absolute inset-0 ${bgColor} z-0`}></div>
      )}

      {/* Contenido */}
      <div className="relative z-20 p-8">
        <h3 className="text-3xl font-space-grotesk font-light mb-4">{title}</h3>
        <p className="text-lg font-lato font-light">{subtitle}</p>
      </div>

      {/* Parte inferior */}
      <div className="relative z-20 p-8 mt-auto">
        {variant === 'bullets' || variant === 'both' ? (
          <ul className="mb-6 space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mt-2 mr-2"></span>
                <span className="font-lato font-light">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {variant === 'cta' || variant === 'both' ? (
          <button className={`mt-4 ${variant === 'both' ? 'px-6 py-2 border rounded-full hover:bg-white/10 transition-colors' : 'underline hover:opacity-80'}`}>
            {ctaText}
          </button>
        ) : null}
      </div>
    </div>
  )
}