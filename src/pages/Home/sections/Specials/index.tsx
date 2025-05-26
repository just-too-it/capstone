import { Card } from '../../../../shared/ui/components';
import { cards } from './data';
import styles from './styles.module.scss';

export const Specials = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>This week specials!</h2>
      <div className={styles.content}>
        {cards.map(card => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </section>
  );
};
