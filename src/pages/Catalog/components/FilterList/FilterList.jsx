import React from 'react';

import { METRO_LIST } from '../../../../utils/filterData';
import { InputCheckbox } from '../../../../components/InputCheckbox';
import { Button } from '../../../../components/common/Button';

import { Filter } from '../Filter';
import { DoubleRange } from '../DoubleRange';
import { SelectOption } from '../SelectOption';
import './FilterList.scss';

export function FilterList({
  handleSubmit,
  handleReset,
  filter,
  checkboxHandler,
  selectHandler,
  filterItems,
}) {
  return (
    <aside className='filter'>
      {/* Заголовок блока фильтра */}
      <h2 className='filter__title'>Фильтр</h2>

      {/* Форма для применения фильтров */}
      <form name='filter' className='filter-form' onSubmit={handleSubmit}>
        {filterItems.map((block, index) => {
          return (
            <div key={index} className='filter-wrapper'>
              {/* Компонент Filter для каждой секции фильтров */}
              <Filter
                title={block.title}
                variant={`${block.type === 'checkbox' ? 'checkbox' : 'select'}`}
                onClick={(setIsOpen, isOpen) => {
                  setIsOpen(!isOpen);
                }}
              >
                {block.type === 'checkbox' ? (
                  // Блок для флажков
                  block.items.map((item, index) => {
                    return (
                      <li key={index} className='filter__list-item'>
                        {/* Компонент InputCheckbox для каждого элемента списка флажков */}
                        <InputCheckbox
                          labelName={item}
                          name={block.category + index}
                          type={block.type}
                          variant='filter'
                          // Определение, выбран ли флажок
                          isChecked={filter[block.category].includes(item)}
                          // Обработчик изменения флажка
                          onChange={() => checkboxHandler(block.category, item)}
                        />
                      </li>
                    );
                  })
                ) : block.type === 'range' ? (
                  // Блок для диапазона значений стоимости
                  <li key={index} className='filter__list-range'>
                    <DoubleRange min={0} max={500000} />
                  </li>
                ) : (
                  // Блок для выбора из списка станций метро
                  <li key={index} className='filter__list-select'>
                    <SelectOption
                      options={METRO_LIST}
                      onChange={(o) => {
                        selectHandler(block.category, o);
                      }}
                    />
                  </li>
                )}
              </Filter>
            </div>
          );
        })}

        {/* Кнопки применения и сброса фильтров */}
        <div className='filter__buttons'>
          <Button
            type='submit'
            width='100%'
            size='medium'
            onSubmit={handleSubmit}
          >
            Применить
          </Button>
          <Button
            type='button'
            width='100%'
            size='medium'
            color='orange-empty'
            onClick={handleReset}
          >
            Сбросить
          </Button>
        </div>
      </form>
    </aside>
  );
}
