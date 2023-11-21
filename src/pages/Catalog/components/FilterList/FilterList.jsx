import React from 'react';

import { Button } from '../../../../components/common/Button';
import { Filter } from '../Filter';
import { DoubleRange } from '../DoubleRange';
import { SelectOption } from '../SelectOption';
import { SelectFilter } from '../SelectFilter';
import { FilterCheckbox } from '../FilterCheckbox';

import './FilterList.scss';

export function FilterList({
  handleSubmit,
  handleReset,
  filter,
  checkboxHandler,
  selectHandler,
  filterItems,
  onMenuClick,
}) {
  return (
    <aside className='filter'>
      {/* Заголовок блока фильтра */}
      <h2 className='filter__title'>Фильтр</h2>
      <h2 className='filter__title-m'>
        Фильтры
        <button type='button' onClick={onMenuClick}></button>
      </h2>

      {/* Форма для применения фильтров */}
      <form className='filter-form' name='filter' onSubmit={handleSubmit}>
        {filterItems.map((block, index) => {
          return (
            <div key={index} className='filter-wrapper'>
              {block.type === 'boolean' ? (
                // Простой чекбокс для фильтра "Подготовка к школе"
                <div className='filter-checkbox'>
                  <FilterCheckbox
                    variant='dev'
                    option={{
                      name: 'Подготовка к школе',
                      slug: 'preparing_for_school',
                    }}
                    isChecked={filter[block.category]} // Установите значение в зависимости от выбора
                    onChange={() => {
                      checkboxHandler('preparing_for_school');
                    }}
                  />
                </div>
              ) : (
                // Обработка других типов фильтров, как и прежде
                <Filter
                  title={block.title}
                  variant={`${
                    block.type === 'checkbox' ? 'checkbox' : 'select'
                  }`}
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
                          <FilterCheckbox
                            variant='check'
                            option={item}
                            isChecked={filter[item.slug]}
                            onChange={() => {
                              checkboxHandler(item.slug);
                            }}
                          />
                        </li>
                      );
                    })
                  ) : block.type === 'range' ? (
                    // Блок для диапазона значений стоимости
                    <li key={index} className='filter__list-range'>
                      <DoubleRange min={0} max={500000} />
                    </li>
                  ) : block.type === 'select' ? (
                    // Блок для выбора из списка станций метро
                    <li key={index} className='filter__list-select'>
                      <SelectOption
                        options={block.items}
                        onChange={(selectedOption) => {
                          selectHandler(block.category, selectedOption);
                        }}
                      />
                    </li>
                  ) : (
                    block?.items?.map((item, index) => {
                      return (
                        <li key={index} className='filter__list-select'>
                          <SelectFilter
                            option={item}
                            labelName={item.name}
                            name={block.category + index}
                            type={block.type}
                            // Определение, выбран ли флажок
                            isChecked={filter[block.category].some(
                              (obj) => obj.slug === item.slug
                            )}
                            onChange={(selectedOption) => {
                              selectHandler(block.category, selectedOption);
                            }}
                          />
                        </li>
                      );
                    })
                  )}
                </Filter>
              )}
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
            color='empty'
            onClick={handleReset}
          >
            Сбросить
          </Button>
        </div>
      </form>
    </aside>
  );
}
