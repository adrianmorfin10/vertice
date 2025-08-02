'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Productos y servicios', href: '#productos' },
    { name: 'Nuestros principios', href: '#principios' },
    { name: 'Esquemas de inversión', href: '#inversion' },
    { name: 'Ubicaciones', href: '#ubicaciones' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="fixed w-full z-50 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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

        {/* Desktop Navigation - Space Grotesk para todos los elementos */}
        <div className="hidden md:flex space-x-8 font-space-grotesk">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-lg font-light hover:text-gray-300 transition-colors"
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

        {/* Mobile Menu - También con Space Grotesk */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 text-2xl font-space-grotesk">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-light py-2 hover:text-gray-300 transition-colors"
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