import PropTypes from 'prop-types';
import './Input.scss';

/**
 * Компонент инпута.
 * Используется для создания интерактивных инпутов.
 */
export const Input = ({
  inputId,
  variant,
  name,
  onChange,
  value,
  placeholder,
  type,
}) => (
  <input
    name={name}
    id={inputId}
    onChange={onChange}
    value={value}
    className={`input input_kind_${variant}`}
    placeholder={placeholder}
    type={type}
  />
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
};

Input.defaultProps = {
  variant: 'form',
  onChange: undefined,
  inputId: undefined,
  name: undefined,
  value: undefined,
  placeholder: undefined,
  type: undefined,
};
