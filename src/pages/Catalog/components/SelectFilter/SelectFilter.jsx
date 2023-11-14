import './SelectFilter.scss';

// Функциональный компонент для отображения чекбокса
export function SelectFilter({ option, isChecked, onChange }) {
  return (
    <div className='select-filter'>
      <label
        htmlFor={option.slug}
        className={`select-filter__label${
          isChecked ? ' select-filter__label_checked' : ''
        }`}
      >
        {option.name}
        <input
          type='checkbox'
          className='select-filter__input'
          name={option.slug}
          id={option.slug}
          checked={isChecked || false}
          onChange={() => onChange(option)}
        />
      </label>
    </div>
  );
}
