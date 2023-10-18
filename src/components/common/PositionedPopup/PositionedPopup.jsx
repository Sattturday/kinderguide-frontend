import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeAllModals } from '../../../store/modalsSlice';
import './PositionedPopup.scss';

export const PositionedPopup = ({ isOpen, name, children, left, top }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        dispatch(closeAllModals());
      }
    };

    document.addEventListener('keydown', closeByEscape);
    document.body.classList.add('page_lock');

    return () => {
      document.body.classList.remove('page_lock');
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen, dispatch]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAllModals());
    }
  };

  return (
    <div
      className={`position-popup${
        (isOpen && ' position-popup_opened') || ''
      } position-popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div
        className='position-popup__container'
        style={{
          position: 'absolute',
          left,
          top,
        }}
      >
        {children}
        <button
          className='position-popup__close-btn'
          type='button'
          onClick={() => dispatch(closeAllModals())}
        />
      </div>
    </div>
  );
};
