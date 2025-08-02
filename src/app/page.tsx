import Image from "next/image";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import { AgregadosPetreos } from "./components/AgregadosPetreos";
import { Servicios } from "./components/Servicios";
import { Principios } from './components/Principios';
import ContactForm from './components/ContactForm'
import { Footer } from './components/Footer'



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Logos/>
      <AgregadosPetreos />
      <Servicios />
      <Principios />
      <ContactForm />
      <Footer />
    
      {/* Rest of your content */}
    </main>
  )
}