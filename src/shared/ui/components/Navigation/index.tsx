import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { ReactComponent as BurgerIcon } from '../../../../assets/images/icons/icon_burger_menu.svg';

import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { NavItem } from './NavItem/NavItem';
import { NavigationItem } from './NavItem/types';

interface NavigationProps {
  data: NavigationItem[];
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

    const handleClickEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleClickEsc);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleClickEsc);
    };
  }, []);

  if (data.length === 0) return null;

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const renderMenu = (menu: NavigationItem[]) => {
    return menu.map(({ name, href, label }) => {
      const isCurrentPage = location.pathname === href;

      return <NavItem key={name} href={href} label={label} isCurrentPage={isCurrentPage} />;
    });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.desktop}>{renderMenu(data)}</ul>

      <button
        className={styles.burgerButton}
        onClick={toggleMenu}
        type='button'
        aria-label='Menu'
        aria-expanded={isMenuOpen}>
        <BurgerIcon />
      </button>

      <ul className={clsx(styles.mobile, { [styles.active]: isMenuOpen })}>{renderMenu(data)}</ul>
    </nav>
  );
};
