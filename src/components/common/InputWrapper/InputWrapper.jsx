import './InputWrapper.scss';

// import Search from '../../../images/Input/Search.svg';

/**
 * Компонент инпута.
 * Используется для создания интерактивных инпутов.
 */
export const InputWrapper = ({
  inputId,
  labelText,
  variant,
  errorText,
  children,
}) => (
  <div className={`inputWrapper inputWrapper_kind_${variant}`}>
    <label htmlFor={inputId} className='inputWrapper__label'>
      {labelText}
    </label>
    {/* {variant === 'search' && ( */}
    {/*   <div className='input__searchIcon'> */}
    {/*     <Button variant='link' size='small'> */}
    {/*       <img className='input__searchImg' src={Search} alt='search' /> */}
    {/*     </Button> */}
    {/*   </div> */}
    {/* )} */}
    {children}
    <span
      className={`inputWrapper__error inputWrapper__error_kind_${variant} ${inputId}-error`}
    >
      {errorText}
    </span>
  </div>
);
