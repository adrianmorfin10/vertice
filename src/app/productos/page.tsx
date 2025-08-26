
import Navbar from "../components/NavBar";
import { AgregadosPetreosdos } from "../components/AgregadosPetreosdos";
import { Serviciosdos } from "../components/Serviciosdos";
import { Serviciostres } from "../components/Serviciostres";
import ContactForm from '../components/ContactForm';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-18"> {/* ✅ Agrega margen superior de 80px */}
        <Serviciosdos />
        <AgregadosPetreosdos />
        <Serviciostres />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}