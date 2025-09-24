import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Expertise from '@/components/sections/expertise';
import Services from '@/components/sections/services';
import Clients from '@/components/sections/clients';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}
