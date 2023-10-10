import React, { useState } from 'react';
import './Filter.scss';
import { Button } from '../common/Button';

const filterData = [
  {
    title: 'Профили',
    sortBy: 'profile',
    search: false,
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
    search: false,
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
    search: false,
    items: ['Английский', 'Французский', 'Испанский', 'Китайский'],
    type: 'checkbox',
  },
  {
    title: 'Округ',
    sortBy: 'district',
    search: false,
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
    search: true,
    items: ['новогиреево', 'Китай город', 'Нагатинская', 'Арбат'],
    type: 'text',
  },
  {
    title: 'Стоимость',
    sortBy: 'price',
    search: false,
    type: 'range',
  },
];

export default function Filter() {
  const [value, setValue] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <aside className='filter'>
      <h2 className='filter__title'>Фильтр</h2>
      <form name='filter' variant='filter' handleSubmit={handleSubmit}>
        {filterData.map((block, index) => {
          return (
            <ul key={index} className='filter__list'>
              {block.title}
              {block.type === 'checkbox' ? (
                block.items.map((item, index) => {
                  return (
                    <li key={index} className='filter__list-item'>
                      <label htmlFor={block.sortBy} className='filter__label'>
                        {item}

                        <input
                          name={block.sortBy}
                          type={block.type}
                          className={`input_type_${block.type}`}
                        />
                      </label>
                    </li>
                  );
                })
              ) : block.type === 'range' ? (
                <li key={index} className='filter__list-item'>
                  <label htmlFor={block.sortBy} className='filter__label'>
                    <input
                      name={block.sortBy}
                      type={block.type}
                      className={`input_type_${block.type}`}
                      min='0'
                      max='100'
                      step='1'
                      value='50'
                    />
                  </label>
                </li>
              ) : (
                <li key={index} className='filter__list-item'>
                  <label htmlFor={block.sortBy} className='filter__label'>
                    <input
                      name={block.sortBy}
                      type={block.type}
                      className={`input_type_${block.type}`}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </label>
                </li>
              )}
            </ul>
          );
        })}
        <Button type='submit' onClick={handleSubmit} />
      </form>
    </aside>
  );
}
