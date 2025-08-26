import Image from "next/image";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import UbicacionesHome from "../components/UbicacionesHome";
import ContactForm from '../components/ContactForm'
import { Footer } from '../components/Footer'



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    
      <UbicacionesHome />
      <ContactForm />
      
      <Footer />
    
      {/* Rest of your content */}
    </main>
  )
}