import { Footer, Header } from '../../shared/ui/sections';
import { About, Hero, Specials, Testimonials } from './sections';

import styles from './styles.module.scss';

export const Home = () => {
  return (
    <div className='app-container'>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};
