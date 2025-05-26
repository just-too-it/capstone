import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';

import styles from './styles.module.scss';
import { PATHS } from '../../../constants/paths';

export const Footer = () => {
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
    <footer className={styles.footer}>
      {renderLogo()}
      <div className={styles.copyright}>
        <p>© 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};
