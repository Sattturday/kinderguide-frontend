import './NewsCard.scss';
import { useDispatch } from 'react-redux';
import { openNewsModal } from '../../../../store/modalsSlice';
import { setTitle, setImg, setText } from '../../../../store/newsPopupSlice';
import { setIndex } from '../../../../store/reviewPopupSlice';

export const NewsCard = ({ dataCard }) => {
  const dispatch = useDispatch();

  const handleClickCardNew = () => {
    dispatch(setTitle(dataCard.title));
    dispatch(setImg(dataCard.image));
    dispatch(setText(dataCard.content));
    dispatch(openNewsModal());
    dispatch(setIndex('none'));
  };

  const isLargeCard =
    dataCard.id === 0 ||
    dataCard.id === 6 ||
    (dataCard.id % 6 === 4 && dataCard.id > 4);
  const isOrangeCard =
    (dataCard.id - 2) % 5 === 0 ||
    dataCard.id === 4 ||
    (dataCard.id - 2) % 5 === 2;

  return (
    <li
      className={
        isLargeCard
          ? 'news-card__largeCard news-card'
          : isOrangeCard
            ? 'news-card__orange-border news-card'
            : 'news-card__normalCard news-card'
      }
      onClick={handleClickCardNew}
    >
      <img
        className={
          isLargeCard
            ? 'news-card__image-largeCard'
            : 'news-card__image-normalCard'
        }
        src={dataCard.image}
        alt='тут будет картинка'
      />
      <div
        className={
          isLargeCard
            ? 'news-card__info-largeCard'
            : 'news-card__info-normalCard'
        }
      >
        <p className='news-card__date'>{dataCard.date_posted}</p>
        <h3 className='news-card__title'>{dataCard.title}</h3>
        <p
          className={
            isLargeCard
              ? 'news-card__description-largeCard'
              : 'news-card__description-normalCard'
          }
          dangerouslySetInnerHTML={{ __html: dataCard.content }}
        ></p>
      </div>
    </li>
  );
};
