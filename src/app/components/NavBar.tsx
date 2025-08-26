'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Productos y servicios', href: '/productos' },
    { name: 'Nuestros principios', href: '/principios' },
    { name: 'Esquemas de inversión', href: '/inversion' },
    { name: 'Ubicaciones', href: '/ubicaciones' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <nav className="fixed w-full z-50">
      {/* Fondo con blur */}
      <div className="absolute inset-0 bg-[#00000030] bg-opacity-50 backdrop-blur-[400px] -z-10" />
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="z-50">
          <Image 
            src="/vertice.png" 
            alt="Vértice Logo" 
            width={140}
            height={50}
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-space-grotesk">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white text-lg font-light hover:text-gray-300 transition-colors ${
                pathname === item.href ? 'border-b-2 border-white' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu - Con el mismo fondo blur */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#00000030] bg-opacity-10 backdrop-blur-[400px] flex flex-col items-center justify-center space-y-8 text-2xl font-space-grotesk">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white font-light py-2 hover:text-gray-300 transition-colors ${
                  pathname === item.href ? 'border-b-2 border-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}