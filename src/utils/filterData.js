export const FILTER_ITEMS = [
  {
    title: 'Профиль',
    category: 'profile',
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
    category: 'age',
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
    category: 'language',
    items: ['Английский', 'Французский', 'Испанский', 'Китайский'],
    type: 'checkbox',
  },
  {
    title: 'Округ',
    category: 'district',
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
    category: 'metro',
    items: ['новогиреево', 'Китай город', 'Нагатинская', 'Арбат'],
    type: 'text',
  },
  {
    title: 'Стоимость',
    category: 'price',
    type: 'range',
  },
];

export const INITIAL_FILTER_STATE = {
  category: 'school',
  request: '',
  sort: '',
  sortDirection: true,
  profile: [],
  age: [],
  language: [],
  district: [],
  metro: [],
  price: {
    minVal: 0,
    maxVal: 10000000,
  },
};

export const NAV_CATEGORY = [
  { name: 'Школы', category: 'school' },
  { name: 'Сады', category: 'kindergarten' },
  { name: 'Курсы', category: 'course' },
];

export const METRO_LIST = [
  'Авиамоторная',
  'Автозаводская',
  'Академическая',
  'Александровский ',
  'Алтуфьево',
  'Аннино',
  'Арбатская АрбатскоПокровская линия',
  'Арбатская Филевская линия',
  'Аэропорт',
  'Бабушкинская',
  'Багратионовская',
  'Баррикадная',
  'Бауманская',
  'Беговая',
  'Белорусская Кольцевая линия',
  'Белорусская Замоскворецкая линия',
  'Беляево',
  'Бибирево',
  'Библиотека имени Ленина',
  'Борисово',
  'Боровицкая',
  'Ботанический ',
  'Братиславская',
  'Бульвар адмирала Ушакова',
  'Бульвар Дмитрия Донского',
  'Бульвар Рокоссовского',
  'Варшавская',
  'ВДНХ',
  'Владыкино',
  'Водный стадион',
  'Войковская',
  'Волгоградский проспект',
  'Волжская',
  'Волоколамская',
  'Воробьевы горы',
  'Выставочная',
  'Деловой центр',
  'Динамо',
  'Дмитровская',
  'Добрынинская',
  'Домодедовская',
  'Достоевская',
  'Дубровка',
  'Жулебино',
  '',
  'Зорге',
  'Измайлово',
  'Калужская',
  'Кантемировская',
  'Каховская',
  'Каширская',
  'Киевская АрбатскоПокровская линия',
  'Киевская Филевская линия',
  'Китайгород',
  'Кожуховская',
  'Коломенская',
  'Комсомольская Кольцевая линия',
  'Комсомольская Сокольническая линия',
  'Коньково',
  'Коптево',
  'Косино',
  'Котельники',
  'Красногвардейская',
  'Краснопресненская',
  'Красносельская',
  'Красные ворота',
  'Крестьянская застава',
  'Кропоткинская',
  'Крылатское',
  'Крымская',
  'Кузнецкий мост',
  'Кузьминки',
  'Кунцевская АрбатскоПокровская линия',
  'Кунцевская Филевская линия',
  'Курская Кольцевая линия',
  'Курская АрбатскоПокровская линия',
  'Кутузовская',
  'Ленинский проспект',
  'Лермонтовский проспект',
  'Лесопарковая',
  'Лубянка',
  'Люблино',
  'Марксистская',
  'Марьина Роща',
  'Марьино',
  'Маяковская',
  'Медведково',
  'Международная',
  'Менделеевская',
  'Митино',
  'Молодежная',
  'Нагатинская',
  'Нагорная',
  'Нахимовский проспект',
  'Некрасовка',
  'Нижегородская',
  'Новогиреево',
  'Новокосино',
  'Новокузнецкая Замоскворецкая линия',
  'Новокузнецкая КалужскоРижская линия',
  'Новопеределкино',
  'Новослободская',
  'Новоясеневская',
  'Окружная',
  'Октябрьская Кольцевая линия',
  'Октябрьская КалужскоРижская линия',
  'Октябрьское поле',
  'Орехово',
  'Отрадное',
  'Охотный ',
  'Павелецкая Замоскворецкая линия',
  'Павелецкая Кольцевая линия',
  'Парк культуры Кольцевая линия',
  'Парк культуры Сокольническая линия',
  'Парк Победы',
  'Партизанская',
  'Первомайская',
  'Перово',
  'ПетровскоРазумовская',
  'Печатники',
  'Пионерская',
  'Планерная',
  'Площадь Ильича',
  'Площадь Революции',
  'Полежаевская',
  'Полянка',
  'Пражская',
  'Преображенская площадь',
  'Пролетарская',
  'Проспект Вернадского',
  'Проспект Мира',
  'Профсоюзная',
  'Пушкинская ТаганскоКраснопресненская линия',
  'Пушкинская Сокольническая линия',
  'Речной вокзал',
  'Рижская',
  'Римская',
  'Рязанский проспект',
  'Савеловская',
  'Саларьево',
  'Свиблово',
  'Севастопольская',
  'Семеновская',
  'Серпуховская',
  'Славянский бульвар',
  'Смоленская АрбатскоПокровская линия',
  'Смоленская Филевская линия',
  'Сокол',
  'Соколиная гора',
  'Сокольники',
  'Солнцево',
  'Спартак',
  'Спортивная Сокольническая линия',
  'Спортивная Филевская линия',
  'Сретенский бульвар',
  'Стрешнево',
  'Строгино',
  'Студенческая',
  'Сухаревская',
  'Сходненская',
  'Таганская Кольцевая линия',
  'Таганская ТаганскоКраснопресненская линия',
  'Тверская',
  'Театральная',
  'Текстильщики',
  'Теплый стан',
  'Тимирязевская',
  'Третьяковская КалужскоРижская линия',
  'Третьяковская КалужскоРижская линия',
  'Тропарево',
  'Трубная',
  'Тульская',
  'Тургеневская',
  'Тушинская',
  'Угрешская',
  'Улица 1905 года',
  'Улица академика Янгеля',
  'Улица Горчакова',
  'Улица Дмитриевского',
  'Улица Милашенкова',
  'Улица Народного ополчения',
  'Улица Новаторов',
  'Улица Подбельского',
  'Улица Сергея Эйзенштейна',
  'Улица Скобелевская',
  'Улица Старокачаловская',
  'Университет',
  'Филевский парк',
  'Фили',
  'Фрунзенская',
  'Ховрино',
  'Хорошево',
  'Царицыно',
  'Цветной бульвар',
  'Центральный рынок',
  'Черкизовская',
  'Чертановская',
  'Чеховская',
  'Чистые пруды',
  'Чкаловская',
  'Шаболовская',
  'Шелепиха',
  'Шипиловская',
  'Шоссе Энтузиастов',
  'Щелковская',
  'Щукинская',
  'Электрозаводская',
  'Западная',
  'Южная',
  'Ясенево',
];
