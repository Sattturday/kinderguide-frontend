import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => (
  <nav className='navigation'>
    <Link to='/' className='navigation__item navigation__item_type_active'>
      Главная
    </Link>
    <Link to='/' className='navigation__item'>
      Образование
    </Link>
    <Link to='/' className='navigation__item'>
      Специалисты
    </Link>
    <Link to='/' className='navigation__item'>
      Для родителей
    </Link>
  </nav>
);
