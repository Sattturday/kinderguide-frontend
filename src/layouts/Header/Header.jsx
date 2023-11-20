import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { openLoginModal, openRegisterModal } from '../../store/modalsSlice';
import { Navigation } from '../../components/Navigation';
import logo from '../../images/logo.svg';
import loginIcon from './images/icon_login.svg';
import { BurgerMenu } from './BurgerMenu';
import './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const user = useSelector((state) => state.auth.user);
  return (
    <header className='header'>
      <div className='header__left-container'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        <Navigation usedFor='header' />
      </div>
      {token ? (
        <Link to='profile' className='header__profile' />
      ) : (
        <>
          <div className='header__auth-area'>
            <button
              onClick={() => dispatch(openLoginModal())}
              className='header__auth-btn header__auth-btn_login'
            >
              Войти
            </button>
            <button
              onClick={() => dispatch(openRegisterModal())}
              className='header__auth-btn header__auth-btn_registration'
            >
              Создать аккаунт
            </button>
          </div>
          <div className='header__burger'>
            <BurgerMenu />
          </div>
        </>
      )}
    </header>
  );
};
