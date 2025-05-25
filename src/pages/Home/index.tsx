import { Footer, Header } from '../../shared/ui/sections';
import { About, Hero, Specials, Testimonials } from './sections';

export const Home = () => {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};
