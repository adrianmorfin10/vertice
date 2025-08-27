'use client'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-[#3A404A] text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/vertice.png"
            alt="Vértice Logo"
            width={160}
            height={60}
            className="mb-4"
          />
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/mineriavertice" className="text-2xl hover:text-yellow-400 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://x.com/mineriavertice" className="text-2xl hover:text-yellow-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/mineriavertice/" className="text-2xl hover:text-yellow-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mineriavertice" className="text-2xl hover:text-yellow-400 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xl font-space-grotesk font-light mb-4">Contacto</h3>
          <p className="font-lato mb-2">Contacto@mineriavertice.com</p>
          <p className="font-lato">+52 771 489 2302</p>
        </div>

        {/* Dirección */}
        <div>
          <h3 className="text-xl font-space-grotesk font-light mb-4">Ubicación</h3>
          <p className="font-lato mb-2">Zona Plateada, Pachuca, Hidalgo.</p>
          <p className="font-lato mb-4">CP 42084</p>
          <a href="ubicaciones" className="flex items-center font-lato hover:text-yellow-400 transition-colors">
            <FaMapMarkerAlt className="mr-2" /> Ver en mapa
          </a>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-xl font-space-grotesk font-light mb-4">Enlaces</h3>
          <ul className="space-y-2 font-lato">
            <li><a href="" className="hover:text-yellow-400 transition-colors">Inicio</a></li>
            <li><a href="servicios" className="hover:text-yellow-400 transition-colors">Servicios</a></li>
            <li><a href="inversion" className="hover:text-yellow-400 transition-colors">Inversiones</a></li>
            <li><a href="contacto" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-gray-600 text-center font-lato">
        <p>© {new Date().getFullYear()} Vértice Minería. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}