import React, { useState } from 'react';
import './InputCheckbox.scss';

export function InputCheckbox({
  name,
  type,
  variant,
  labelName,
  text,
  onClick,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`checkbox checkbox__variant_${variant}`}>
      <label
        htmlFor={name}
        className={`checkbox-label__variant_${variant} ${
          isChecked ? `checkbox-label__${variant}_checked` : ''
        }`}
      >
        {labelName}
        <input
          type={type}
          className={`checkbox__input input-${type}`}
          name={name}
          id={name}
          checked={isChecked}
          onChange={() => onClick(setIsChecked, isChecked)}
        />
      </label>
      {text && (
        <p className='checkbox__text'>
          Соглашаюсь с условиями использования
          <br /> и политикой конфиденциальности
        </p>
      )}
    </div>
  );
}
