import { Navigation } from '../../components';
import Logo from '../../components/Logo';
import { HEADER_NAV } from '../../../constants/header-nav';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation data={HEADER_NAV} />
    </header>
  );
};
