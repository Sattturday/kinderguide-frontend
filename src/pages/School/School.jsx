import React from 'react';
import { useParams } from 'react-router-dom';

import { OrgWrapper } from '../../components/OrgWrapper';
import { AddSchoolReviewModal } from './components/AddSchoolReviewModal';
import { AddReviewGratitudeModal } from '../../components/AddReviewGratitudeModal/AddReviewGratitudeModal';
import { useGetSchoolQuery } from '../../api/schoolApi';
import { useGetSchoolReviewsQuery } from '../../api/schoolReviewsApi';

export const School = () => {
  const { id } = useParams();
  const { data: schoolData = [], isLoading } = useGetSchoolQuery(id);
  const { data: schoolReviewsData = [] } = useGetSchoolReviewsQuery(id);
  if (isLoading) return <h1>Идет загрузка...</h1>;

  const activities = [
    {
      type: 'Профиль',
      text: schoolData?.profile?.map((i) => i.name).join(', '),
    },
    {
      type: 'Время работы',
      text: schoolData.working_hours,
    },
    {
      type: 'Возрастные группы',
      text: schoolData.age,
    },
    {
      type: 'Классы',
      text: schoolData.classes?.map((i) => i.name).join(', '),
    },
    {
      type: 'Иностранные языки',
      text: schoolData?.languages?.map((i) => i.name).join(', '),
    },
  ];
  return (
    <>
      <OrgWrapper
        data={schoolData}
        feedback={schoolReviewsData}
        org='Школы'
        activities={activities}
      />
      <AddSchoolReviewModal data={schoolData} org='Школы' />
      <AddReviewGratitudeModal />
    </>
  );
};
