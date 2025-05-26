import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../shared/ui/sections';
import { Button } from '../../shared/ui/components';
import { PATHS } from '../../shared/constants/paths';

import styles from './styles.module.scss';

export const Confirm = () => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate(PATHS.home);
  };

  return (
    <div className='app-container'>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>The booking was successful!</h2>
        <p className={styles.description}>
          Thank you for booking a table in our restaurant. You will receive a confirmation call
          within 5 minutes. If there is no call, please call (xxx) xxxxxxxx. We will be waiting for
          you in our restaurant!
        </p>
        <Button onClick={handleBtn}>Go home</Button>
      </main>
      <Footer />
    </div>
  );
};
