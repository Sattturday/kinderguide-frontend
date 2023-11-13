import {
  FILTER_ITEMS_KINDERGARTENS,
  FILTER_ITEMS_SCHOOLS,
  METRO_COLOR_LIST,
} from './filterData';

// Функция для формирования строки параметров URL на основе фильтров
export function buildUrlParams(filters) {
  const params = new URLSearchParams();
  const arrayObjectKeys = ['underground', 'area'];

  for (const key in filters) {
    if (key === 'category') continue;

    if (arrayObjectKeys.includes(key) && filters[key]) {
      if (Array.isArray(filters[key]) && filters[key].length > 0) {
        filters[key].forEach((obj) => {
          params.append(key, obj.slug);
        });
      }
      continue;
    }

    if (typeof filters[key] === 'boolean') {
      params.append(key, filters[key]);
      continue;
    }

    if (
      key === 'price' &&
      (filters[key].minVal !== 0 || filters[key].maxVal !== 500000)
    ) {
      params.append('min_price', filters[key].minVal);
      params.append('max_price', filters[key].maxVal);
      continue;
    }

    if (!filters[key].length) continue;

    if (Array.isArray(filters[key])) {
      filters[key].forEach((value) => params.append(key, value));
      continue;
    }

    params.append(key, filters[key]);
  }
  console.log('URL Parameters:', params.toString());
  return params.toString();
}

// Функция формирования списка фильтров
export function getFilterItems(selected, areaFilters, metroFilters) {
  return selected === 'kindergartens'
    ? FILTER_ITEMS_KINDERGARTENS
    : [
        ...FILTER_ITEMS_SCHOOLS,
        {
          category: 'area',
          title: 'Округ',
          type: 'select-filter',
          items: areaFilters,
        },
        {
          category: 'underground',
          title: 'Метро',
          type: 'select',
          items: metroFilters,
        },
      ];
}

// Функция определения цвета ветки
export const findLineByStation = (stationName) => {
  let stationLine = null;

  METRO_COLOR_LIST.forEach((line) => {
    const station = line.stations.find((s) => s.name === stationName);
    if (station) {
      stationLine = line;
    }
  });

  return stationLine ? stationLine.hex_color : null;
};
