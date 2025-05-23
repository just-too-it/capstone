import { Footer, Header } from '../../shared/ui/sections';
import { About, Hero, Specials, Testimonials } from './sections';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};
