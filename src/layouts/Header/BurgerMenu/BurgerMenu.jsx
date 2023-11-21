import './BurgerMenu.scss';

import burgerIcon from '../images/burger_icon.svg';
import { useState } from 'react';
import { Navigation } from '../../../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal, openRegisterModal } from '../../../store/modalsSlice';
import { Link } from 'react-router-dom';
import { setIndex } from '../../../store/reviewPopupSlice';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <img
        src={burgerIcon}
        alt='Открыть боковое меню'
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className='burger-menu__owerlay' onMouseDown={handleOverlay} />
      )}
      <div
        className={isOpen ? 'burger-menu burger-menu_open' : 'burger-menu'}
        onClick={() => setIsOpen(false)}
      >
        <button
          className='burger-menu__close-btn'
          onClick={() => setIsOpen(false)}
        />
        <Navigation usedFor='burger' />
        {!user && (
          <>
            <button
              onClick={() => {
                dispatch(openLoginModal());
                dispatch(setIndex('none'));
              }}
              className='burger-menu__auth'
            >
              Войти
            </button>
            <button
              onClick={() => {
                dispatch(openRegisterModal());
                dispatch(setIndex('none'));
              }}
              className='burger-menu__auth'
            >
              Создать аккаунт
            </button>
          </>
        )}
        {user && (
          <Link to='profile' className='burger-menu__auth'>
            Профиль
          </Link>
        )}
      </div>
    </>
  );
};
