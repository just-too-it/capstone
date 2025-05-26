import { Footer, Header } from '../../shared/ui/sections';
import { BookingForm } from './sections';

import styles from './styles.module.scss';

export const ReserveTable = () => {
  return (
    <div className='app-container'>
      <Header />
      <main className={styles.main}>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};
