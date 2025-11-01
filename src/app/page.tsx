import Image from "next/image";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import UbicacionesHome from "./components/UbicacionesHome";
import { Servicios } from "./components/Servicios";
import { Principios } from './components/Principios';
import ContactForm from './components/ContactForm'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Principios />
      <UbicacionesHome />
      <ContactForm />
      <Footer />
    </main>
  )
}