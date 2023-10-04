import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import { Navigation } from '../../components/Navigation';

export const Header = () => (
  <header className='header'>
    <div className='header__left-container'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <Navigation usedFor='header' />
    </div>
    <div className='header__auth-area'>
      <Link to='/' className='header__auth-btn header__auth-btn__login'>
        Войти
      </Link>
      <Link to='/' className='header__auth-btn header__auth-btn__registration'>
        Создать аккаунт
      </Link>
    </div>
  </header>
);
