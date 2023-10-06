import PropTypes from 'prop-types';
import './Input.scss';
import { Button } from '../Button';
import ShowPassword from '../../../images/Input/ShowPassword.svg';
import HidePassword from '../../../images/Input/HidePassword.svg';
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
  isActive,
}) => (
  <div className={`input input_kind_${variant}`}>
    <label htmlFor={inputId} className='input__label'>
      {labelText}
    </label>
    {variant === 'password' && errorText && (
      <div className='input__forgetPassword'>
        <Button variant='link' size='small'>
          Забыли пароль?
        </Button>
      </div>
    )}
    <div className={`input__fieldWrapper input__fieldWrapper_kind_${variant}`}>
      {variant === 'password' && (
        <div className='input__passwordIcon'>
          <Button variant='link' size='small'>
            <img
              className='input__passwordImg'
              src={isActive ? HidePassword : ShowPassword}
              alt={isActive ? 'hide' : 'show'}
            />
          </Button>
        </div>
      )}
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
  isActive: PropTypes.string,
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
  isActive: undefined,
};
