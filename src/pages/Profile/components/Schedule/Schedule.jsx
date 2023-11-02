import React from 'react';

import { EmptyPage } from '../../../../components/common/EmptyPage/EmptyPage';
import { futureSchedule } from '../../../../utils/emptyPageMessage';
import './Schedule.scss';

export function Schedule() {
  return (
    <EmptyPage
      title={futureSchedule.title}
      size='small'
      color='black'
      margin='large'
      img={futureSchedule.img}
      imgName={futureSchedule.imgName}
    />
  );
}
