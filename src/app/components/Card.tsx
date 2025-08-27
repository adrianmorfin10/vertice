'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type CardProps = {
  title: string
  subtitle: string
  variant: 'cta' | 'bullets' | 'both' | 'text-only'
  bullets?: string[]
  ctaText?: string
  bgType: 'color' | 'image'
  bgColor?: string
  bgImage?: string
  contentText?: string
  link: string
}

export default function Card({
  title,
  subtitle,
  variant,
  bullets = [],
  ctaText = 'Ver más',
  bgType,
  bgColor = 'bg-gray-800',
  bgImage = '/default-bg.jpg',
  contentText = '',
  link
}: CardProps) {
  const [isMobile, setIsMobile] = useState(true) // Inicializar como true para evitar flash
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 400)
    }
    
    // Verificar al montar el componente
    checkScreenSize()
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkScreenSize)
    
    // Limpiar listener al desmontar
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  const buttonStyles = variant === 'both' 
    ? 'px-6 py-2 border rounded-full hover:bg-white/10 transition-colors inline-block' 
    : 'underline hover:opacity-80'

  return (
    <div className={`flex flex-col justify-between overflow-hidden relative group ${isMobile ? 'h-auto border-b border-[#3A404A]' : 'min-h-[600px] border-r border-[#3A404A] hover:transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300'} ${bgType === 'image' ? 'text-white' : ''}`}>
      
      {/* Fondo con efecto hover para desktop */}
      {bgType === 'image' ? (
        <div className="absolute inset-0 z-0">
          <Image 
            src={bgImage} 
            alt="" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>
      ) : (
        <div className={`absolute inset-0 ${bgColor} z-0 group-hover:brightness-110 transition-all duration-300`}></div>
      )}

      {/* Overlay elegante para hover en desktop */}
      {!isMobile && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      )}

      {/* Contenido superior */}
      {(title || subtitle) && (
        <div className="relative z-20 p-8">
          {title && (
            <h3 className="text-3xl font-space-grotesk font-light mb-4 group-hover:translate-y-[-5px] transition-transform duration-300">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-lg font-lato font-light group-hover:translate-y-[-3px] transition-transform duration-300">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Contenido inferior */}
      <div className="relative z-20 p-8 mt-auto">
        {variant === 'text-only' && contentText && (
          <div className="[&>h4]:text-3xl [&>h4]:font-space-grotesk [&>h4]:font-light [&>h4]:mb-4 [&>p]:text-lg [&>p]:font-lato [&>p]:font-light group-hover:[&>p]:translate-y-[-3px] transition-transform duration-300" 
               dangerouslySetInnerHTML={{ __html: contentText }} />
        )}

        {(variant === 'bullets' || variant === 'both') && (
          <ul className="mb-6 space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mt-2 mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="font-lato font-light">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {(variant === 'cta' || variant === 'both') && (
          <Link 
            href={link} 
            className={`${buttonStyles} group-hover:scale-105 transition-transform duration-300`}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  )
}