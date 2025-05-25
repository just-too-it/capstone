import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { NavigationItem } from './types';

import { ReactComponent as BurgerIcon } from '../../../../assets/images/icons/icon_burger_menu.svg';

import styles from './styles.module.scss';
import { MouseEvent, useEffect, useState } from 'react';

interface NavigationProps {
  data: Array<NavigationItem>;
}

export const Navigation = ({ data }: NavigationProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.target.closest(`.${styles.mobile}`) && !e.target.closest(`.${styles.burgerButton}`)) {
        setIsMenuOpen(false);
      }
    };

    const handleClickEsq = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleClickEsq);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleClickEsq);
    };
  }, []);

  if (data.length === 0) return null;

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const renderMenu = (menu: NavigationItem[]) => {
    return menu.map(({ name, href, label }) => {
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
              className={({ isActive }) => clsx(styles.link, { [styles.link_active]: isActive })}
              title={label}>
              {label}
            </NavLink>
          )}
        </li>
      );
    });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.desktop}>{renderMenu(data)}</ul>

      <button
        className={styles.burgerButton}
        onClick={toggleMenu}
        aria-label='Menu'
        aria-expanded={isMenuOpen}>
        <BurgerIcon />
      </button>

      <ul className={clsx(styles.mobile, { [styles.active]: isMenuOpen })}>{renderMenu(data)}</ul>
    </nav>
  );
};
