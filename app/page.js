import Nosotros from './components/Nosotros';
import Sustentabilidad from './components/Sustentabilidad';

export default function Home() {
  return (
    <main className=''>
      <section id='landing' className='w-screen h-screen bg-indigo-400'>
        <h2>Home</h2>
      </section>
      <section id='nosotros' className='w-screen h-screen'>
        <Nosotros />
      </section>

      <section id='productos' className='w-screen h-screen bg-lime-500'>
        <h2>Productos</h2>
        {/* Your content here */}
      </section>

      <section id='sustentabilidad' className='w-screen h-screen'>
        <Sustentabilidad />
      </section>

      <section id='contacto' className='w-screen h-screen bg-purple-500'>
        <h2>Contacto</h2>
        {/* Your content here */}
      </section>
    </main>
  );
}
