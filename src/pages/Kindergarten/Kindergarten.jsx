import { useParams } from 'react-router-dom';

import { OrgWrapper } from '../../components/OrgWrapper';
import { useGetKindergartenQuery } from '../../api/kindergartenApi';
import { useGetKindergartenReviewsQuery } from '../../api/kindergartenReviewsApi';
import { AddKindergartenReviewModal } from './components/AddKindergartenReviewModal';
import { AddReviewGratitudeModal } from '../../components/AddReviewGratitudeModal/AddReviewGratitudeModal';

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
      text: kindergartenData?.age_category?.map((i) => i.name).join(', '),
    },
    {
      type: 'Время работы',
      text: kindergartenData?.working_hours?.map((i) => i.name).join(', '),
    },
    {
      type: 'Размер группы',
      text: kindergartenData?.group_size?.map((i) => i.name).join(', '),
    },
    {
      type: 'Иностранные языки',
      text: kindergartenData?.languages?.map((i) => i.name).join(', '),
    },
    {
      type: 'Спортивное развитие',
      text: kindergartenData?.sport_dev,
    },
    {
      type: 'Музыкальное развитие',
      text: kindergartenData?.music_dev,
    },
    {
      type: 'Интеллектуальное развитие',
      text: kindergartenData?.intel_dev,
    },
    {
      type: 'Творческое развитие',
      text: kindergartenData?.create_dev,
    },
  ];
  return (
    <>
      <OrgWrapper
        data={kindergartenData}
        feedback={kindergartenReviewsData}
        org='Детские сады'
        activities={activities}
      />
      <AddKindergartenReviewModal data={kindergartenData} org='Детские сады' />
      <AddReviewGratitudeModal />
    </>
  );
};
