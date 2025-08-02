"use client"; // Asegúrate de que el componente es un Componente de Cliente

import Image from "next/image";
import React from "react";

const Logos = () => {
  // Array de logos (ampliado)
  const logos = [
    { src: "/orafol.png", alt: "Orafol Logo" },
    { src: "/3m.png", alt: "3M Logo" },
    { src: "/avery.png", alt: "Avery Logo" },
    { src: "/orafol.png", alt: "Orafol Logo" }, // Añadido para repetir
    { src: "/3m.png", alt: "3M Logo" }, // Añadido para repetir
    { src: "/avery.png", alt: "Avery Logo" }, // Añadido para repetir
    { src: "/orafol.png", alt: "Orafol Logo" }, // Añadido para repetir
    { src: "/3m.png", alt: "3M Logo" }, // Añadido para repetir
    { src: "/avery.png", alt: "Avery Logo" }, // Añadido para repetir
  ];

  return (
    <div className=" bg-[#242A34] w-full flex items-center justify-center">
    <div className="relative py-16 bg-[#242A34] max-w-[1400px] overflow-hidden w-full">
      {/* Imágenes en los extremos */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rotate-180">
        <Image src="/gradri.png" alt="Gradiente Izquierdo" width={300} height={100} />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <Image src="/gradri.png" alt="Gradiente Derecho" width={300} height={100} />
      </div>

      {/* Contenedor principal */}
      <div className="w-full">
        {/* Contenedor de logos */}
        <div className="max-w-[1400px] mx-auto w-full animate-marquee whitespace-nowrap">
          <div className="flex space-x-12">
            {logos.map((logo, index) => (
              <div className="relative flex-shrink-0" key={index}>
                <Image
                  src={logo.src} // Ruta del logo
                  alt={logo.alt}
                  width={100} // Tamaño ajustable (ancho reducido)
                  height={50} // Tamaño ajustable (alto reducido)
                  onError={() => console.log(`Error loading ${logo.alt}`)} // Registra un error si no se carga
                />
              </div>
            ))}
            {/* Repite los logos para la animación continua */}
            {logos.map((logo, index) => (
              <div className="relative flex-shrink-0" key={`repeat-${index}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100} // Tamaño ajustable (ancho reducido)
                  height={50} // Tamaño ajustable (alto reducido)
                  onError={() => console.log(`Error loading ${logo.alt}`)} // Registra un error si no se carga
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Logos;
