import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = ({ usedFor }) => (
  // В зависимости от  места использования меняется ширина блока навигации
  // За это отвечает пропс usedFor, применяющий модификатор
  <nav className={`navigation navigation_${usedFor}`}>
    <Link to='/' className='navigation__item'>
      Главная
    </Link>
    <Link to='/' className='navigation__item'>
      Образование
      {usedFor === 'footer' && (
        <ul className='navigation__item-list'>
          <li>Школы</li>
          <li>Сады</li>
          <li>Курсы</li>
        </ul>
      )}
    </Link>
    <Link to='/' className='navigation__item'>
      Специалисты
      {usedFor === 'header' && (
        <span className='navigation__item-span'>Скоро</span>
      )}
      {usedFor === 'footer' && (
        <ul className='navigation__item-list'>
          <li>Репититоры</li>
          <li>Психологи</li>
        </ul>
      )}
    </Link>
    <Link to='/' className='navigation__item'>
      Блог
      {usedFor === 'header' && (
        <span className='navigation__item-span'>Скоро</span>
      )}
      {usedFor === 'footer' && (
        <ul className='navigation__item-list'>
          <li>Статьи</li>
          <li>Кейсы</li>
          <li>Подборки</li>
          <li>Тесты</li>
        </ul>
      )}
    </Link>
  </nav>
);
