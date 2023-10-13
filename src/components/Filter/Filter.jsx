import React, { useState } from 'react';
import './Filter.scss';

export default function Filter({ title, variant, onClick, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='filter__subtitle-wrapper'
        onClick={() => onClick(setIsOpen, isOpen)}
      >
        <h3 className='filter__subtitle'>{title}</h3>
        <span
          className={`filter__subtitle-caret ${
            isOpen ? 'filter__subtitle-caret_active' : ''
          }`}
        ></span>
      </div>
      <ul
        className={`filter__list filter__list_${variant} ${
          isOpen ? `filter__list_${variant}_active` : ''
        }`}
      >
        {children}
      </ul>
    </>
  );
}
