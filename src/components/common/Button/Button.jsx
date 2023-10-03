import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Компонент кнопки.
 * Используется для создания интерактивных кнопок.
 */
export const Button = ({
  onClick,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  children,
}) => (
  <button
    className={`button button_size_${size} button_variant_${variant}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  /**
   * Вариант внешнего вида кнопки
   */
  variant: PropTypes.oneOf(['primary', 'square', 'link']),
  /**
   * Вариант типа кнопки
   */
  type: PropTypes.oneOf(['button', 'submit']),
  /**
   * Вариант размера кнопки
   */
  size: PropTypes.oneOf(['medium', 'large']),
  /**
   * Текст кнопки
   */
  children: PropTypes.node,
  /**
   * Действие, выполняемое при нажатии на кнопку
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  size: 'medium',
  children: 'Press me',
  onClick: undefined,
};
