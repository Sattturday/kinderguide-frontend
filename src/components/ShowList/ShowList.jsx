import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import mapIcon from '../../images/Catalog/map_icon.svg';
import listIcon from '../../images/Catalog/list_icon.svg';
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

export const ShowList = ({
  data,
  selected,
  isLoading,
  fullData,
  menuOpen,
  onMenuClick,
}) => {
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
          {selected !== 'favorites' || !user ? (
            <div className='show-list__infoWrapper'>
              {selected === 'favorites' && !user ? (
                <div className='show-list__info show-list__info_favorite'>
                  <div className='show-list__icons' />
                  <p className='show-list__paragraph'>
                    <Link to='/' className='show-list__link'>
                      Авторизуйтесь
                    </Link>
                    , чтобы сохранить список избранного для просмотра
                    на&nbsp;этом и других устройствах
                  </p>
                </div>
              ) : selected !== 'favorites' ? (
                <>
                  <p className='show-list__info show-list__info_catalog'>
                    Найдено {data.length}{' '}
                    {selected === 'schools'
                      ? getName(data.length, schoolName)
                      : getName(data.length, gardenName)}
                  </p>
                  <span
                    className={`show-list__info-icon${
                      (menuOpen && ' show-list__info-icon_active') || ''
                    }`}
                    onClick={onMenuClick}
                  >
                    Фильтр
                    <span></span>
                  </span>
                </>
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
                    Списком&nbsp;
                    <img src={listIcon} alt='map icon' />
                  </Button>
                ))}
            </div>
          ) : null}
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
