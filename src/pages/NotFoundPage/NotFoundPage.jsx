import React from 'react';
import { EmptyPage } from '../../components/common/EmptyPage';
import { Button } from '../../components/common/Button';
import { Sort } from '../../components/common/Sort';

import {
  searchMessage,
  notfoundPage,
  futureСontent,
  futureSchedule,
} from '../../constants/emptyPageMessage';
import './NotFoundPage.scss';
import { InputCheckbox } from '../../components/InputCheckbox/InputCheckbox';

export function NotFoundPage() {
  return (
    <div className='not-found'>
      <Sort />
      <EmptyPage
        title={notfoundPage.title}
        size='medium'
        color='blue'
        margin='medium'
      >
        <Button size='large' width='400px' />
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
      <InputCheckbox
        variant='terms'
        text='true'
        type='checkbox'
        onClick={(setIsChecked, isChecked) => setIsChecked(!isChecked)}
      />
    </div>
  );
}
