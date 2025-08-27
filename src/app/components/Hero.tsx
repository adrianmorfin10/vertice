'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  const slides = [
    {
      title: 'Minería con futuro',
      subtitle: 'Somos un grupo dedicado al desarrollo de proyectos mineros, extraemos y procesamos minerales de una manera eficiente y sostenible',
      cta: 'Ver esquemas de inversión',
      background: '/Variant4.png'
    },
    {
      title: 'Desarrollo Responsable',
      subtitle: 'Estamos comprometidos con extraer recursos de manera eficiente y segura, minimizando el impacto ambiental y promoviendo el bienestar de las comunidades donde operamos',
      cta: 'Ver nuestros principios',
      background: '/Variant4.png'
    },
    {
      title: 'Crecimiento Sostenible',
      subtitle: 'Garantizamos un equilibrio entre economía, medio ambiente y desarrollo social. La minería responsable asegura un futuro sostenible para las próximas generaciones',
      cta: 'Ver esquemas de inversión',
      background: '/Variant4.png'
    }
  ]

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-avance cada 20 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 20000)
    return () => clearInterval(timer)
  }, [])

  // Definir variantes con el tipo correcto
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={1}>
        <motion.div 
          key={currentSlide}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Fondo con overlay oscuro */}
          <div className="absolute inset-0 bg-black/45 z-0">
            <Image
              src={slides[currentSlide].background}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Contenido de texto */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl font-light mb-8 md:mb-10 max-w-lg"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.button 
                className="px-6 py-3 md:px-8 md:py-3 rounded-full border border-white text-base md:text-lg font-light hover:bg-white/10 transition-colors"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Flechas de navegación (solo desktop) */}
      {!isMobile && (
        <>
          <button 
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white text-4xl md:text-5xl hover:scale-125 transition-transform"
            aria-label="Slide anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white text-4xl md:text-5xl hover:scale-125 transition-transform"
            aria-label="Siguiente slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </>
      )}
      
      {/* Indicadores de paginación (para móvil y desktop) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}