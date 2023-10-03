import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = ({ usedFor }) => (
  // В зависимости от  места использования меняется ширина блока навигации
  // За это отвечает пропс usedFor, применяющий модификатор
  <nav className={`navigation navigation_${usedFor}`}>
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
      Блог
    </Link>
  </nav>
);
