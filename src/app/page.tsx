import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Presentation from '@/components/sections/presentation';
import Expertise from '@/components/sections/expertise';
import Services from '@/components/sections/services';
import Events from '@/components/sections/events';
import Clients from '@/components/sections/clients';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Presentation />
      <Expertise />
      <Services />
      <Events />
      <Clients />
      <Contact />
    </>
  );
}
