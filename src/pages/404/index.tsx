import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../shared/ui/sections';
import { Button } from '../../shared/ui/components';
import { PATHS } from '../../shared/constants/paths';

import styles from './styles.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate(PATHS.home);
  };

  const handleBookingBtn = () => {
    navigate(PATHS.booking);
  };

  return (
    <div className='app-container'>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>The page is under development</h2>
        <p>You can go to one of the ready-made pages.</p>
        <ul className={styles.list}>
          <li>
            <Button onClick={handleHomeBtn}>Go to the home page</Button>
          </li>
          <li>
            <Button onClick={handleBookingBtn}>Go to the booking page</Button>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};
