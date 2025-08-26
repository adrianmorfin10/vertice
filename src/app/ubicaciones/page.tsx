'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from "../components/NavBar"
import { Footer } from '../components/Footer'

const UbicacionesMapa = dynamic(() => import('../components/Ubicaciones'), {
  ssr: false,
  loading: () => {
    console.log('[MAP_LOADING] Cargando componente de mapa...')
    return <div className="h-[600px] bg-gray-200 animate-pulse rounded-lg" />
  }
})

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  ssr: false
})

// Datos completos de las 3 minas en Hidalgo
const minasHidalgo = [
  {
    id: 1,
    nombre: "Mina Vértice Norte",
    ubicacion: { lat: 20.1194, lng: -98.7332 },
    descripcion: "Extracción de minerales preciosos",
    direccion: "Carretera Mineral del Monte km 12.5"
  },
  {
    id: 2,
    nombre: "Mina Vértice Centro",
    ubicacion: { lat: 20.0918, lng: -98.7624 },
    descripcion: "Planta de procesamiento principal",
    direccion: "Camino a Real del Monte s/n"
  },
  {
    id: 3,
    nombre: "Mina Vértice Sur",
    ubicacion: { lat: 20.0583, lng: -98.7821 },
    descripcion: "Yacimiento de alta pureza",
    direccion: "Paraje San José, Zimapán"
  }
]

export default function UbicacionesPage() {
  const [mapa, setMapa] = useState<any>(null)
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(minasHidalgo[0])

  const centrarMapa = (ubicacion: typeof minasHidalgo[0]) => {
    console.log('[MAP_NAVIGATION] Centrando en:', ubicacion.nombre)
    setUbicacionSeleccionada(ubicacion)
    if (mapa && ubicacion.ubicacion) {
      mapa.panTo(ubicacion.ubicacion)
      mapa.setZoom(15)
    }
  }

  const abrirNavegacion = () => {
    if (!ubicacionSeleccionada) return
    console.log('[NAVIGATION] Abriendo ruta a:', ubicacionSeleccionada.nombre)
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${ubicacionSeleccionada.ubicacion.lat},${ubicacionSeleccionada.ubicacion.lng}&travelmode=driving`,
      '_blank'
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="mt-[80px] bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center text-[#A58A35]">
            Nuestras Ubicaciones en Hidalgo
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mapa (70% ancho) */}
            <div className="lg:w-3/4 h-[600px] rounded-lg overflow-hidden shadow-xl">
              <UbicacionesMapa 
                ubicaciones={minasHidalgo}
                onMapLoad={(map) => {
                  console.log('[MAP_LOADED] Mapa inicializado')
                  setMapa(map)
                }}
                ubicacionSeleccionada={ubicacionSeleccionada}
              />
            </div>
            
            {/* Lista de ubicaciones (30% ancho) */}
            <div className="lg:w-1/4 space-y-6">
              <h2 className="text-2xl font-bold text-[#A58A35]">
                Nuestras Minas
              </h2>
              
              <div className="space-y-4">
                {minasHidalgo.map((mina) => (
                  <div 
                    key={mina.id}
                    onClick={() => centrarMapa(mina)}
                    className={`p-4 rounded-lg cursor-pointer transition-all text-[#000000] ${
                      ubicacionSeleccionada.id === mina.id 
                        ? 'bg-[#A58A35] text-white' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-bold">{mina.nombre}</h3>
                    <p className="text-sm mt-1">{mina.descripcion}</p>
                    <p className="text-xs mt-2 opacity-80">{mina.direccion}</p>
                  </div>
                ))}
              </div>
              
              <button
                onClick={abrirNavegacion}
                disabled={!ubicacionSeleccionada}
                className="w-full py-3 px-4 bg-[#A58A35] text-white rounded-lg hover:bg-[#8a6e2d] transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Cómo llegar (Waze/Google Maps)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#A58A35] py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}