import React from 'react';
import { EmptyPage } from '../../components/common/EmptyPage/EmptyPage';
import './NotFoundPage.scss';

export function NotFoundPage() {
  return (
    <div className='not-found'>
      <EmptyPage
        title='К сожалению, в этом разделе пусто'
        text='В ближайшее время мы обязательно добавить информацию'
      />
    </div>
  );
}
