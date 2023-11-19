import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import mapIcon from '../../images/Catalog/map_icon.svg';
import { searchMessage } from '../../utils/emptyPageMessage';
import { getName } from '../../utils/utils';
import { Preloader } from '../Preloader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { BigMap } from '../BigMap/BigMap';
import { EmptyPage } from '../common/EmptyPage';

import './ShowList.scss';

const schoolName = ['школа', 'школы', 'школ'];
const gardenName = ['детский сад', 'детксих сада', 'детских садов'];

export const ShowList = ({ data, selected, isLoading, fullData }) => {
  const user = useSelector((state) => state.auth.user);
  const [isList, setIsList] = useState(true);

  function toggleList() {
    setIsList(!isList);
  }

  return (
    <section className='show-list'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='show-list__infoWrapper'>
            {selected === 'favorites' && !user ? (
              <div className='show-list__info'>
                <div className='show-list__icons' />
                <p className='show-list__paragraph'>
                  <Link to='/' className='show-list__link'>
                    Авторизуйтесь
                  </Link>
                  , чтобы сохранить список избранного для просмотра на этом и
                  других устройствах
                </p>
              </div>
            ) : selected !== 'favorites' ? (
              <p className='show-list__info'>
                Найдено {data.length}{' '}
                {selected === 'schools'
                  ? getName(data.length, schoolName)
                  : getName(data.length, gardenName)}
              </p>
            ) : null}
            {selected !== 'favorites' &&
              data.length !== 0 &&
              (isList ? (
                <Button onClick={toggleList} variant='link'>
                  На карте&nbsp;
                  <img src={mapIcon} alt='map icon' />
                </Button>
              ) : (
                <Button onClick={toggleList} variant='link'>
                  Списком
                </Button>
              ))}
          </div>
          {data.length !== 0 && isList ? (
            <div className='show-list__items'>
              {data.map((card) => {
                return <Card key={`${card.type}_${card.id}`} cardData={card} />;
              })}
            </div>
          ) : data.length !== 0 && !isList ? (
            <div className='show-list__mapWrapper'>
              <BigMap key={fullData.id} cardData={fullData} />
            </div>
          ) : (
            <EmptyPage variant='catalog' data={searchMessage} />
          )}
        </>
      )}
    </section>
  );
};
