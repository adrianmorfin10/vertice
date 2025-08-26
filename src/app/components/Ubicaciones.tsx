'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useEffect } from 'react'

interface Ubicacion {
  id: number
  nombre: string
  ubicacion: { lat: number; lng: number }
}

interface UbicacionesProps {
  ubicaciones: Ubicacion[]
  onMapLoad: (map: google.maps.Map) => void
  ubicacionSeleccionada: Ubicacion
}

export default function Ubicaciones({ 
  ubicaciones = [], 
  onMapLoad,
  ubicacionSeleccionada
}: UbicacionesProps) {
  console.log('[MAP_INIT] Inicializando con:', ubicaciones.length, 'ubicaciones')

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '',
    libraries: ['places'],
    language: 'es',
    region: 'MX'
  })

  useEffect(() => {
    if (loadError) {
      console.error('[MAP_ERROR]', loadError)
    }
  }, [loadError])

  if (loadError) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4 bg-red-50 text-red-600 rounded-lg">
        <h3 className="font-bold">Error de carga</h3>
        <p className="mt-2">Detalles técnicos:</p>
        <code className="text-xs mt-2 p-2 bg-red-100 rounded">
          {loadError.message}
        </code>
      </div>
    )
  }

  if (!isLoaded) {
    console.log('[MAP_LOADING] Cargando API...')
    return (
      <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-gray-300 rounded-full mb-2"></div>
          <p>Cargando mapa...</p>
        </div>
      </div>
    )
  }

  console.log('[MAP_READY] Renderizando mapa con ubicación seleccionada:', ubicacionSeleccionada.nombre)

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={ubicacionSeleccionada.ubicacion}
      zoom={15}
      onLoad={onMapLoad}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      }}
    >
      {ubicaciones.map((ubicacion) => (
        <Marker
          key={ubicacion.id}
          position={ubicacion.ubicacion}
          icon={{
            url: ubicacionSeleccionada.id === ubicacion.id 
              ? '/location-selected.png' 
              : '/location-default.png',
            scaledSize: new google.maps.Size(40, 40)
          }}
        />
      ))}
    </GoogleMap>
  )
}