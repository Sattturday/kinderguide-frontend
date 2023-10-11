import React, { useState } from 'react';
import './Filter.scss';

export default function Filter({ title, onClick, children }) {
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
      <ul className={`filter__list ${isOpen ? 'filter__list_active' : ''}`}>
        {children}
      </ul>
    </>
  );
}
