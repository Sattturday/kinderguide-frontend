import React, { useState } from 'react';
import './Filter.scss';
import { Button } from '../common/Button';
import { DoubleRange } from './DoubleRange/DoubleRange';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { SelectOption } from './SelecetOption/SelecetOption';
import Filter from './Filter';

const options = [
  { label: 'новогиреево', id: 111 },
  { label: 'Китай город', id: 222 },
  { label: 'Нагатинская', id: 333 },
  { label: 'Арбат', id: 444 },
  { label: 'Кольцевая', id: 555 },
];

const filterData = [
  {
    title: 'Профили',
    sortBy: 'profile',
    items: [
      'Общеобразовательный',
      'Естественно-научный',
      'Гуманитарный',
      'Социально-экономический',
      'Технологичный',
    ],
    type: 'checkbox',
  },
  {
    title: 'Возраст',
    sortBy: 'age',
    items: [
      'дошкольное обучение',
      'начальная школа',
      'основная школа',
      'старшая школа',
    ],
    type: 'checkbox',
  },
  {
    title: 'Иностранные языки',
    sortBy: 'lang',
    items: ['Английский', 'Французский', 'Испанский', 'Китайский'],
    type: 'checkbox',
  },
  {
    title: 'Округ',
    sortBy: 'district',
    items: [
      'Центральный',
      'Северный',
      'Северо-Восточный',
      'Юго-Западный',
      'Западный',
      'Северо-Западный',
      'Южный',
      'Восточный',
      'Юго-Восточный',
    ],
    type: 'checkbox',
  },
  {
    title: 'Метро',
    sortBy: 'metro',
    items: ['новогиреево', 'Китай город', 'Нагатинская', 'Арбат'],
    type: 'text',
  },
  {
    title: 'Стоимость',
    sortBy: 'price',
    type: 'range',
  },
];

export default function FilterList({ cards, onClick }) {
  const [optionValue, setOptionValue] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
  }
  function cancellationHandler() {}

  return (
    <aside className='filter'>
      <h2 className='filter__title'>Фильтр</h2>
      <form name='filter' className='filter-form' onSubmit={handleSubmit}>
        {filterData.map((block, index) => {
          return (
            <div key={index} className='filter-wrapper'>
              <Filter
                title={block.title}
                onClick={(setIsOpen, isOpen) => {
                  setIsOpen(!isOpen);
                }}
              >
                {block.type === 'checkbox' ? (
                  block.items.map((item, index) => {
                    return (
                      <li key={index} className='filter__list-item'>
                        <InputCheckbox
                          labelName={item}
                          name={block.sortBy + index}
                          type={block.type}
                          variant='filter'
                          onClick={(setIsChecked, isChecked) =>
                            setIsChecked(!isChecked)
                          }
                        />
                      </li>
                    );
                  })
                ) : block.type === 'range' ? (
                  <li key={index} className='filter__list-item'>
                    <DoubleRange min={0} max={10000000} />
                  </li>
                ) : (
                  <li key={index} className='filter__list-item'>
                    <SelectOption
                      multiple
                      options={options}
                      value={optionValue}
                      onChange={(o) => setOptionValue(o)}
                    />
                  </li>
                )}
              </Filter>
            </div>
          );
        })}
        <Button type='submit' onClick={handleSubmit} />
        <Button type='button' onClick={cancellationHandler} />
      </form>
    </aside>
  );
}
