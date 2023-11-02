import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetKindergartenQuery } from '../../api/kindergartenApi';
import { useParams } from 'react-router-dom';
import { useGetKindergartenReviewsQuery } from '../../api/kindergartenReviewsApi';

export const Kindergarten = () => {
  const { id } = useParams();
  const { data: kindergartenData = [], isLoading } =
    useGetKindergartenQuery(id);
  const { data: kindergartenReviewsData = [] } =
    useGetKindergartenReviewsQuery(id);
  if (isLoading) return <h1>Идет загрузка...</h1>;

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
      text: kindergartenData?.languages?.map((i) => i.name).join(', '),
    },
    {
      type: 'Спортивное развитие',
      text: kindergartenData?.sport_dev?.map((i) => i.name).join(', '),
    },
    {
      type: 'Музыкальное развитие',
      text: kindergartenData?.music_dev?.map((i) => i.name).join(', '),
    },
    {
      type: 'Интеллектуальное развитие',
      text: kindergartenData?.intel_dev?.map((i) => i.name).join(', '),
    },
  ];
  return (
    <OrgWrapper
      data={kindergartenData}
      feedback={kindergartenReviewsData}
      org='Детские сады'
      activities={activities}
    />
  );
};
