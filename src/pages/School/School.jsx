import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetSchoolQuery } from '../../api/schoolApi';
import { useGetSchoolReviewsQuery } from '../../api/schoolReviewsApi';
import { album } from '../../utils/constants';

export const School = ({ school_id }) => {
  // const { schoolData = [] } = useGetSchoolQuery({ school_id });
  // const { schoolReviewsData = [] } = useGetSchoolReviewsQuery({ school_id });
  const schoolData = {
    id: 123,
    name: 'Школа',
    rating: 4.5,
    reviews: 1,
    description: 'Описание школы',
    telephone: '+7(910)000-00-00',
    address: 'Москва, ул. Льва Толстого, 16',
    underground: 'Московская',
    area: 'Район',
    email: 'school@yandex.ru',
    album: album,
    price: 100,
    price_of_year: 1200,
    age: 0 - 9,
    classes: 'С 1 по 11',
    languages: 'английский',
    profiles: 'гуманитарный',
  };

  const schoolReviewsData = {
    count: 0,
    next: 'string',
    previous: 'string',
    results: [
      {
        id: 0,
        content: 'отзыв',
        grade: 0,
        author: 'Имя',
        date_posted: '2019-08-24T14:15:22Z',
      },
      {
        id: 1,
        content: 'отзыв',
        grade: 0,
        author: 'Имя',
        date_posted: '2019-08-24T14:15:22Z',
      },
      {
        id: 14,
        content: 'отзыв',
        grade: 0,
        author: 'Имя',
        date_posted: '2019-08-24T14:15:22Z',
      },
      {
        id: 15,
        content: 'отзыв',
        grade: 0,
        author: 'Имя',
        date_posted: '2019-08-24T14:15:22Z',
      },
    ],
  };

  const activities = [
    {
      type: 'Профиль',
      text: schoolData.profiles,
    },
    {
      type: 'Время работы',
      text: '',
    },
    {
      type: 'Возрастные группы',
      text: schoolData.age,
    },
    {
      type: 'Классы',
      text: schoolData.classes,
    },
    {
      type: 'Иностранные языки',
      text: schoolData.languages,
    },
  ];
  return (
    <OrgWrapper
      data={schoolData}
      feedback={schoolReviewsData.results}
      org='Школы'
      link='shools'
      activities={activities}
    />
  );
};
