import PropTypes from 'prop-types';
import './Input.scss';
// import { Button } from '../Button';
// import Search from '../../../images/Input/Search.svg';

/**
 * Компонент инпута.
 * Используется для создания интерактивных инпутов.
 */
export const Input = ({
  inputId,
  labelText,
  variant,
  errorText,
  name,
  onChange,
  value,
  placeholder,
  type,
  // forgetPassword,
  children,
}) => (
  <div className={`input input_kind_${variant}`}>
    <label htmlFor={inputId} className='input__label'>
      {labelText}
    </label>
    <div className={`input__fieldWrapper input__fieldWrapper_kind_${variant}`}>
      {children}
      {/* {variant === 'search' && ( */}
      {/*   <div className='input__searchIcon'> */}
      {/*     <Button variant='link' size='small'> */}
      {/*       <img className='input__searchImg' src={Search} alt='search' /> */}
      {/*     </Button> */}
      {/*   </div> */}
      {/* )} */}
      <input
        name={name}
        id={inputId}
        onChange={onChange}
        value={value}
        className={`input__field input__field_kind_${variant}`}
        placeholder={placeholder}
        type={type}
      />
    </div>
    <span
      className={`input__error input__error_kind_${variant} ${inputId}-error`}
    >
      {errorText}
    </span>
  </div>
);

Input.propTypes = {
  /**
   * Вариант внешнего вида инпута
   */
  variant: PropTypes.oneOf(['form', 'password', 'info', 'search', 'price']),
  /**
   * Действие, выполняемое при изменении значения инпута
   */
  onChange: PropTypes.func,
  /**
   * Id инпута, используется также для привязки ярлыка
   */
  inputId: PropTypes.string,
  /**
   * Текст ярлыка
   */
  labelText: PropTypes.string,
  /**
   * Текст ошибки
   */
  errorText: PropTypes.string,
  /**
   * Имя инпута
   */
  name: PropTypes.string,
  /**
   * Значение инпута
   */
  value: PropTypes.string,
  /**
   * Текст плейсхолдера
   */
  placeholder: PropTypes.string,
  /**
   * Индикатор видимости символов пароля
   */
  type: PropTypes.string,
  /**
   * Индикатор видимости символов пароля
   */
  children: PropTypes.element,
};

Input.defaultProps = {
  variant: 'form',
  onChange: undefined,
  inputId: undefined,
  labelText: undefined,
  errorText: undefined,
  name: undefined,
  value: undefined,
  placeholder: undefined,
  type: undefined,
  children: undefined,
};
