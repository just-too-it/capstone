import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

interface NavItemProps {
  href: string;
  label: string;
  isCurrentPage: boolean;
}

export const NavItem = ({ href, label, isCurrentPage }: NavItemProps) => {
  return (
    <li className={styles.item}>
      {isCurrentPage ? (
        <span className={clsx(styles.link, styles.link_active)} title={label} aria-current='page'>
          {label}
        </span>
      ) : (
        <NavLink
          to={href}
          className={({ isActive }) => clsx(styles.link, { [styles.link_active]: isActive })}
          title={label}>
          {label}
        </NavLink>
      )}
    </li>
  );
};
