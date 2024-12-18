import Contacto from "../components/Contacto";
import Landing from "../components/Landing";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Sustentabilidad from "../components/Sustentabilidad";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="landing" className="w-screen h-screen">
          <Landing />
          <WhatsAppButton />
        </section>
        <section id="nosotros" className="w-screen h-full xl:my-16 2xl:my-0">
          <Nosotros />
          <WhatsAppButton />
        </section>

        <section id="servicios" className="w-screen h-full">
          <Servicios />
          <WhatsAppButton />
        </section>

        <section id="sustentabilidad" className="w-screen min-h-screen">
          <Sustentabilidad />
          <WhatsAppButton />
        </section>

        <section
          id="contacto"
          className="w-screen md:h-[calc(100vh-112px)] xl:h-1/4"
        >
          <Contacto />
          <WhatsAppButton />
        </section>
      </main>
    </>
  );
}
