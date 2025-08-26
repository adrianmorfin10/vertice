// app/principios/page.tsx
import Navbar from "../components/NavBar"
import { Footer } from '../components/Footer'
import { Principiosdos } from "../components/Principiosdos"

export default function PrincipiosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Principiosdos />
      <Footer />
    </main>
  )
}