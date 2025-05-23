import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { NavigationItem } from './types';

import styles from './styles.module.css';

interface NavigationProps {
  data: Array<NavigationItem>;
}

export const Navigation = ({ data }: NavigationProps) => {
  const location = useLocation();

  if (data.length === 0) return null;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {data.map(({ name, href, label }) => {
          const isCurrentPage = location.pathname === href;

          return (
            <li key={name} className={styles.item}>
              {isCurrentPage ? (
                <span
                  className={clsx(styles.link, styles.link_active)}
                  title={label}
                  aria-current='page'>
                  {label}
                </span>
              ) : (
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    clsx(styles.link, { [styles.link_active]: isActive })
                  }
                  title={label}>
                  {label}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
