import Contacto from './components/Contacto';
import Landing from './components/Landing';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Sustentabilidad from './components/Sustentabilidad';

export default function Home() {
  return (
    <main className=''>
      <section id='landing' className='w-screen h-screen'>
        <Landing />
      </section>
      <section id='nosotros' className='w-screen h-screen'>
        <Nosotros />
      </section>

      <section id='productos' className='w-screen h-[calc(100vh-112px)]'>
        <Productos />
      </section>

      <section id='sustentabilidad' className='w-screen h-screen'>
        <Sustentabilidad />
      </section>

      <section id='contacto' className='w-screen md:h-[calc(100vh-112px)]'>
        <Contacto />
      </section>
    </main>
  );
}
