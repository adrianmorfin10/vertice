'use client'
import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#A58A35' }}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-space-grotesk font-light mb-4 text-center text-white">Contáctanos</h2>
        <p className="text-xl font-lato text-center mb-12 text-white">Comienza a invertir en un futuro sostenible y seguro.</p>
        
        <form className="space-y-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-2xl font-space-grotesk text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent text-white font-lato border-b-2 border-white focus:outline-none focus:border-white/80 placeholder-white/60"
              placeholder="Escribe tu email"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-2xl font-space-grotesk text-white">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-transparent text-white font-lato border-b-2 border-white focus:outline-none focus:border-white/80 placeholder-white/60"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          
          <div className="pt-6">
            <button 
              type="submit"
              className="w-full px-6 py-4 bg-white text-[#A58A35] text-xl font-space-grotesk rounded-lg hover:bg-white/90 transition-colors"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}