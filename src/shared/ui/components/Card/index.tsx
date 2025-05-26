import styles from './styles.module.scss';

export interface CardProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
}

export const Card = ({ img, title, description, price }: CardProps) => {
  return (
    <article className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.price}>$ {price}</span>
        </header>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
