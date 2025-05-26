import { Navigation } from '../../components';
import Logo from '../../components/Logo';
import { HEADER_NAV } from '../../../constants/header-nav';

import styles from './styles.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';

export const Header = () => {
  const location = useLocation();

  const renderLogo = () => {
    if (location.pathname !== PATHS.home) {
      return (
        <NavLink to={PATHS.home} className={styles.link}>
          <Logo />
        </NavLink>
      );
    } else {
      return <Logo />;
    }
  };
  return (
    <header className={styles.header}>
      {renderLogo()}
      <Navigation data={HEADER_NAV} />
    </header>
  );
};
