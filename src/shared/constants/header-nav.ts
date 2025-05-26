import { NavigationItem } from '../ui/components/Navigation/NavItem/types';
import { PATHS } from './paths';

export const HEADER_NAV: Array<NavigationItem> = [
  {
    name: 'home',
    label: 'Home',
    href: PATHS.home,
  },
  {
    name: 'about',
    label: 'About',
    href: PATHS.about,
  },
  {
    name: 'menu',
    label: 'Menu',
    href: PATHS.menu,
  },
  {
    name: 'booking',
    label: 'Booking',
    href: PATHS.booking,
  },
  {
    name: 'orderOnline',
    label: 'Order online',
    href: PATHS.orderOnline,
  },
  {
    name: 'login',
    label: 'Login',
    href: PATHS.login,
  },
];
