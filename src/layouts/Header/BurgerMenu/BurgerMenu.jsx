import './BurgerMenu.scss';

import burgerIcon from '../images/burger_icon.svg';
import { useState } from 'react';
import { Navigation } from '../../../components/Navigation';
import { useDispatch } from 'react-redux';
import { openLoginModal, openRegisterModal } from '../../../store/modalsSlice';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

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
        <button
          onClick={() => dispatch(openLoginModal())}
          className='burger-menu__auth'
        >
          Войти
        </button>
        <button
          onClick={() => dispatch(openRegisterModal())}
          className='burger-menu__auth'
        >
          Создать аккаунт
        </button>
      </div>
    </>
  );
};
