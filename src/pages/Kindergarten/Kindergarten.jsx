import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetKindergartenQuery } from '../../api/kindergartenApi';
import { useGetKindergartenReviewsQuery } from '../../api/kindergartenReviewsApi';
// import { album } from '../../utils/constants';

export const Kindergarten = ({ kindergarten_id }) => {
  // const { kindergartenData = [] } = useGetKindergartenQuery({
  //   kindergarten_id,
  // });
  // const { kindergartenReviewsData = [] } = useGetKindergartenReviewsQuery({
  //   kindergarten_id,
  // });
  const kindergartenData = {
    id: 123,
    name: 'Сад',
    rating: 4.5,
    reviews: 1,
    description: 'Описание сада',
    telephone: '+7(910)000-00-00',
    address: 'Москва, ул. Льва Толстого, 25',
    underground: 'Московская',
    area: 'Район',
    email: 'school@yandex.ru',
    // album: album,
    price: 100,
    price_of_year: 1200,
    age: '0 - 9',
    working_hours: 'С 8:00 до 20:00',
    group_suze: 'До 15 человек',
    languages:
      'французский тест длинной строкиииииииииииииииииииииииииииииииииииииииииииии иииииииииииииииииииииииииииииииииииии',
    sport_dev: 'футбол',
    create_dev: 'рисование',
    music_dev: 'хор',
    intel_dev:
      'веселая азбука, тест длинной строкиииииииииииииииииииииииииииииииииииииииииииииии',
  };

  const kindergartenReviewsData = {
    count: 0,
    next: 'string',
    previous: 'string',
    results: [
      {
        id: 0,
        content: 'отзыв',
        grade: 5,
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
        id: 2,
        content: 'отзыв',
        grade: 0,
        author: 'Имя',
        date_posted: '2019-08-24T14:15:22Z',
      },
      {
        id: 12,
        content: 'отзыв',
        grade: 0,
        author: 'Имя',
        date_posted: '2019-08-24T14:15:22Z',
      },
    ],
  };

  const activities = [
    {
      type: 'Возраст групп',
      text: kindergartenData.age,
    },
    {
      type: 'Время работы',
      text: kindergartenData.working_hours,
    },
    {
      type: 'Размер группы',
      text: kindergartenData.group_suze,
    },
    {
      type: 'Иностранные языки',
      text: kindergartenData.languages,
    },
    {
      type: 'Спортивное развитие',
      text: kindergartenData.sport_dev,
    },
    {
      type: 'Музыкальное развитие',
      text: kindergartenData.music_dev,
    },
    {
      type: 'Интеллектуальное развитие',
      text: kindergartenData.intel_dev,
    },
  ];
  return (
    <OrgWrapper
      data={kindergartenData}
      feedback={kindergartenReviewsData.results}
      org='Детские сады'
      link='kindergartens'
      activities={activities}
    />
  );
};
