import Image from "next/image";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import UbicacionesHome from "./components/UbicacionesHome";
import { Servicios } from "./components/Servicios";
import { Principios } from './components/Principios';
import ContactForm from './components/ContactForm'
import { Footer } from './components/Footer'

/*
<Navbar />
<Hero />
<Servicios />
<Principios />
<UbicacionesHome />
<ContactForm />
<Footer />
*/

export default function Home() {
  return (
    <main>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '1rem'
          }}>
            🚧 Página en Mantenimiento
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Estamos trabajando para mejorar tu experiencia. 
            Volveremos pronto con novedades.
          </p>
          <div style={{
            fontSize: '4rem',
            marginBottom: '2rem'
          }}>
            ⚡
          </div>
          <p style={{
            color: '#888',
            fontStyle: 'italic'
          }}>
            Disculpa las molestias. ¡Gracias por tu paciencia!
          </p>
        </div>
      </div>
    </main>
  )
}