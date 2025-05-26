import { CardProps } from '../../../../shared/ui/components';
import greekSalad from '../../../../assets/images/greek_salad.jpg';
import bruschetta from '../../../../assets/images/bruchetta.svg';
import lemonDessert from '../../../../assets/images/lemon_dessert.jpg';

export const cards: CardProps[] = [
  {
    id: 1,
    title: 'Greek salad',
    description:
      'A vibrant mix of cucumbers, tomatoes, olives, and feta cheese, dressed in herbs and olive oil.',
    img: greekSalad,
    price: 12.99,
  },
  {
    id: 2,
    title: 'Bruschetta',
    description:
      'Crispy toasted bread topped with ripe tomatoes, fresh basil, and a drizzle of olive oil.',
    img: bruschetta,
    price: 5.99,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    description: 'A zesty and refreshing treat with a perfect balance of sweet and tangy flavors.',
    img: lemonDessert,
    price: 7,
  },
];
