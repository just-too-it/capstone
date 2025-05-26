import { Button } from '../../../../shared/ui/components';
import food from '../../../../assets/images/restauranfood.jpg';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../shared/constants/paths';

export const Hero = () => {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate(PATHS.booking);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Little Lemon</h1>
          <h2 className={styles.subtitle}>Chicago</h2>
          <p className={styles.text}>
            We are a family owned restaurant with traditional Mediterranean cuisine and modern
            serving
          </p>
          <Button onClick={handleReserve}>Reserve a table</Button>
        </div>
        <img src={food} alt='Little Lemon restaurant' width={300} className={styles.img} />
      </div>
    </section>
  );
};
