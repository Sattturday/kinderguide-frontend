import { METRO_COLOR_LIST } from './filterData';

// Функция для формирования строки параметров URL на основе фильтров
export function buildUrlParams(filters) {
  const params = new URLSearchParams();
  const arrayObjectKeys = [
    'working_hours',
    'group_size',
    'age_category',
    'profile',
    'classes',
    'languages',
    'area',
    'underground',
  ];

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

    if (typeof filters[key] === 'boolean' && filters[key] === true) {
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
export function getFilterItems(
  selected,
  workingFilters,
  groupSizeFilters,
  ageFilters,
  profileFilters,
  classFilters,
  languageFilters,
  areaFilters,
  metroFilters
) {
  // Константы для общих частей фильтров
  const commonFilters = [
    {
      category: 'languages',
      title: 'Иностранные языки',
      type: 'select-filter',
      items: languageFilters,
    },
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
    {
      title: 'Стоимость',
      category: 'price',
      type: 'range',
    },
  ];

  // Константы для булевых фильтров
  const booleanFilters = [
    {
      category: 'devs',
      title: 'Развитие',
      type: 'checkbox',
      items: [
        {
          name: 'Интеллектуальное',
          slug: 'intel_dev',
        },
        {
          name: 'Музыкальное',
          slug: 'music_dev',
        },
        {
          name: 'Спортивное',
          slug: 'sport_dev',
        },
        {
          name: 'Творческое',
          slug: 'create_dev',
        },
      ],
    },
  ];

  return selected === 'kindergartens'
    ? [
        {
          category: 'working_hours',
          title: 'Время работы',
          type: 'select-filter',
          items: workingFilters,
        },
        {
          category: 'group_size',
          title: 'Размер группы',
          type: 'select-filter',
          items: groupSizeFilters,
        },
        ...booleanFilters,
        {
          category: 'preparing_for_school',
          title: 'Подготовка к школе',
          type: 'boolean',
        },
        {
          category: 'age_category',
          title: 'Возраст',
          type: 'select-filter',
          items: ageFilters,
        },
        ...commonFilters,
      ]
    : [
        {
          category: 'profile',
          title: 'Профиль',
          type: 'select-filter',
          items: profileFilters,
        },
        {
          category: 'classes',
          title: 'Классы',
          type: 'select-filter',
          items: classFilters,
        },
        ...commonFilters,
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
