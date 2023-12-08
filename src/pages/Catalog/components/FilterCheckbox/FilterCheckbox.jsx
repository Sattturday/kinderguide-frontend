import './FilterCheckbox.scss';

export function FilterCheckbox({ variant, option, isChecked, onChange }) {
  return (
    <label
      className={`filter-checkbox__label filter-checkbox__label_${variant}`}
    >
      {variant === 'dev' && <p>{option.name}</p>}
      <input
        className='filter-checkbox__input'
        type='checkbox'
        form='search'
        checked={isChecked || false}
        onChange={() => onChange(option)}
      />
      <span
        className={`filter-checkbox__input-new filter-checkbox__input-new_${variant}`}
      ></span>
      {variant === 'check' && (
        <span className='filter-checkbox__title'>{option.name}</span>
      )}
    </label>
  );
}
