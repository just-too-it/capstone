import chef from '../../../../assets/images/restaurant_chef.jpg';

import styles from './styles.module.scss';

export const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About us</h2>
      <div className={styles.content}>
        <img src={chef} alt='Chef B' className={styles.img} width={200}/>
        <p className={styles.description}>
          At Little Lemon, we bring the vibrant flavors of the Mediterranean to your table with
          fresh, locally sourced ingredients and time-honored recipes. From crisp Greek salads and
          savory bruschetta to zesty lemon desserts, each dish is crafted to delight your senses.
          Join us for a cozy dining experience where warm hospitality meets the sun-kissed tastes of
          the Mediterranean. Opa!
        </p>
      </div>
    </section>
  );
};
