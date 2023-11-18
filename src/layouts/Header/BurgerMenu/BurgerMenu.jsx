import './BurgerMenu.scss';

import burgerIcon from '../images/burger_icon.svg';
import { useState } from 'react';
import { Navigation } from '../../../components/Navigation';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <img
          src={burgerIcon}
          alt='Открыть боковое меню'
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <div
          className='burger-menu burger-menu_open'
          onClick={() => setIsOpen(false)}
        >
          <button
            className='burger-menu__close-btn'
            onClick={() => setIsOpen(false)}
          />
          <Navigation usedFor='burger' />
        </div>
      )}
    </>
  );
};
