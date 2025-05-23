import { Footer, Header } from '../../shared/ui/sections';
import { About, Hero, Specials, Testimonials } from './sections';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};
