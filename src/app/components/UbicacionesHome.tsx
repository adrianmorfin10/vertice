// components/UbicacionesHome.tsx
'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Importar el tipo de Google Maps
import { GoogleMap } from '@react-google-maps/api'

const UbicacionesMapa = dynamic(() => import('./Ubicaciones'), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-white animate-pulse rounded-lg" />
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

// Tipo para las minas
type Mina = typeof minasHidalgo[0]

export default function UbicacionesHome() {
  const [mapa, setMapa] = useState<GoogleMap | null>(null)
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState<Mina>(minasHidalgo[0])

  const centrarMapa = (ubicacion: Mina) => {
    setUbicacionSeleccionada(ubicacion)
    if (mapa && ubicacion.ubicacion) {
      // Usar los métodos del mapa de forma segura
      const mapInstance = mapa as unknown as google.maps.Map
      mapInstance.panTo(ubicacion.ubicacion)
      mapInstance.setZoom(15)
    }
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#A58A35]">
          Nuestras Ubicaciones
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Contamos con tres minas estratégicamente ubicadas en el estado de Hidalgo para servirle mejor.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mapa (70% ancho) */}
          <div className="lg:w-3/4 h-[400px] rounded-lg overflow-hidden shadow-xl">
            <UbicacionesMapa 
              ubicaciones={minasHidalgo}
              onMapLoad={(map) => setMapa(map as unknown as GoogleMap)}
              ubicacionSeleccionada={ubicacionSeleccionada}
            />
          </div>
          
          {/* Lista de ubicaciones (30% ancho) */}
          <div className="lg:w-1/4 space-y-6">
            <h3 className="text-2xl font-bold text-[#A58A35]">
              Nuestras Minas
            </h3>
            
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
                  <h4 className="font-bold">{mina.nombre}</h4>
                  <p className="text-sm mt-1">{mina.descripcion}</p>
                  <p className="text-xs mt-2 opacity-80">{mina.direccion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}