'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: 'Minería con futuro',
      subtitle: 'Somos un grupo dedicado al desarrollo de proyectos mineros, extraemos y procesamos minerales de una manera eficiente y sostenible',
      cta: 'Ver esquemas de inversión',
      background: '/variant4.png'
    },
    {
      title: 'Desarrollo Responsable',
      subtitle: 'Estamos comprometidos con extraer recursos de manera eficiente y segura, minimizando el impacto ambiental y promoviendo el bienestar de las comunidades donde operamos',
      cta: 'Ver nuestros principios',
      background: '/variant4.png'
    },
    {
      title: 'Crecimiento Sostenible',
      subtitle: 'Garantizamos un equilibrio entre economía, medio ambiente y desarrollo social. La minería responsable asegura un futuro sostenible para las próximas generaciones',
      cta: 'Ver esquemas de inversión',
      background: '/variant4.png'
    }
  ]

  // Auto-avance cada 20 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 20000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Fondo con overlay oscuro */}
          <div className="absolute inset-0 bg-black/40 z-0">
            <Image
              src={slide.background}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Contenido de texto */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-24 text-white">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-light mb-8 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl font-light mb-10 max-w-lg">
                {slide.subtitle}
              </p>
              <button className="px-8 rounded-full py-3 border-1 border-white border-rounded text-lg font-light hover:bg-white/10 transition-colors">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Flechas de navegación (chevrones) */}
      <button 
        onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white text-5xl hover:scale-125 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button 
        onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute  right-8 top-1/2 -translate-y-1/2 z-20 text-white text-5xl hover:scale-125 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </section>
  )
}