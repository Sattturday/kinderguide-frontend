import React from 'react';
import { Link } from 'react-router-dom';

import { EmptyPage } from '../../components/common/EmptyPage';
import { notfoundPage } from '../../utils/emptyPageMessage';

import './NotFoundPage.scss';

export function NotFoundPage() {
  return (
    <div className='not-found'>
      <EmptyPage variant='notfound' data={notfoundPage}>
        <Link to={'/'} className='not-found__link'>
          На главную
        </Link>
      </EmptyPage>
    </div>
  );
}
