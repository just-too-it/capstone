import clsx from 'clsx';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
