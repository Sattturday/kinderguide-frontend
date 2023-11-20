import { useEffect, useState } from 'react';
import { ReactComponent as ArrowImage } from '../../../images/Profile/Arrow-min-down.svg';
import { ReactComponent as RadioSelected } from '../../../images/RadioButton/RadiobuttonSelected.svg';
import { ReactComponent as Radio } from '../../../images/RadioButton/Radiobutton.svg';
import './DropDown.scss';

export const DropDown = ({
  name = 'Список',
  selectedDefault = '',
  items = [],
  onSelect = () => {},
  tabIndex = 0,
}) => {
  const [isOpened, setOpened] = useState(false);
  const [value, setValue] = useState({});

  const handleListOpen = () => {
    setOpened((prev) => !prev);
  };

  useEffect(() => {
    if (!selectedDefault) {
      setValue(items.at(0));
      return;
    }
    const selectedItem = items.find((item) => item.name === selectedDefault);
    setValue(selectedItem || {});
  }, [items, selectedDefault]);

  useEffect(() => {
    if (value.name) {
      onSelect(value.name);
    }
  }, [value, onSelect]);

  return (
    <div
      tabIndex={tabIndex}
      className={`dropdown ${isOpened ? 'dropdown_opened' : ''}`}
      onClick={handleListOpen}
      onBlur={() => setOpened(false)}
      aria-label={name}
    >
      <span className='dropdown__title'>{value.title}</span>
      <ArrowImage className='dropdown__caret' />
      <ul
        className={`dropdown__list ${isOpened ? 'dropdown__list_visible' : ''}`}
      >
        {items.map((item) => (
          <li
            key={`label-${item.title}`}
            onClick={() => setValue(item)}
            className={`dropdown__item ${
              item.name === value.name ? 'dropdown__item_selected' : ''
            }`}
          >
            {item.name === value.name ? (
              <RadioSelected key={`radio-${item.title}`} />
            ) : (
              <Radio key={`radio-${item.title}`} />
            )}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
