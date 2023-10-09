import React from 'react';
import { EmptyPage } from '../../components/common/EmptyPage/EmptyPage';
import { Button } from '../../components/common/Button';

import {
  searchMessage,
  notfoundPage,
  futureСontent,
  futureSchedule,
} from '../../constants/emptyPageMessage';
import './NotFoundPage.scss';

export function NotFoundPage() {
  return (
    <div className='not-found'>
      <EmptyPage
        title={notfoundPage.title}
        size='medium'
        color='blue'
        margin='medium'
      >
        <Button />
      </EmptyPage>
      <EmptyPage
        title={searchMessage.title}
        text={searchMessage.text}
        size='medium'
        color='black'
        margin='medium'
      >
        <Button />
      </EmptyPage>
      <EmptyPage
        title={futureСontent.title}
        size='medium'
        color='blue'
        margin='medium'
      >
        <Button size='large' />
      </EmptyPage>
      <EmptyPage
        title={futureSchedule.title}
        size='small'
        color='black'
        margin='large'
        img={futureSchedule.img}
        imgName={futureSchedule.imgName}
      />
    </div>
  );
}
