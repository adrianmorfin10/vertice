'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget as HTMLFormElement)

    try {
      const response = await fetch('https://formsubmit.co/ajax/tu-email@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) throw new Error('Error en el envío')
      
      setSubmitStatus('success')
      ;(e.currentTarget as HTMLFormElement).reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#A58A35' }}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-space-grotesk font-light mb-4 text-center text-white">Contáctanos</h2>
        <p className="text-xl font-lato text-center mb-12 text-white">Comienza a invertir en un futuro sostenible y seguro.</p>
        
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 rounded-lg">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-8 p-4 bg-red-100 text-red-800 rounded-lg">
            Error al enviar. Por favor intenta nuevamente.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-2xl font-space-grotesk text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-transparent text-white font-lato border-b-2 border-white focus:outline-none focus:border-white/80 placeholder-white/60"
              placeholder="Escribe tu nombre"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-2xl font-space-grotesk text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-transparent text-white font-lato border-b-2 border-white focus:outline-none focus:border-white/80 placeholder-white/60"
              placeholder="Escribe tu email"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-2xl font-space-grotesk text-white">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-transparent text-white font-lato border-b-2 border-white focus:outline-none focus:border-white/80 placeholder-white/60"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          
          <div className="pt-6">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-white text-[#A58A35] text-xl font-space-grotesk rounded-lg hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}