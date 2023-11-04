import './NewsCard.scss';
import { useDispatch } from 'react-redux';
import { openNewsModal } from '../../../../store/modalsSlice';
import { setTitle, setImg, setText } from '../../../../store/newsPopupSlice';

export const NewsCard = ({ dataCard }) => {
  const dispatch = useDispatch();

  const handleClickCardNew = () => {
    dispatch(setTitle(dataCard.title));
    dispatch(setImg(dataCard.image));
    dispatch(setText(dataCard.content));
    dispatch(openNewsModal());
  };

  return (
    <li className='news-card' onClick={handleClickCardNew}>
      <img
        className='news-card__image'
        src={dataCard.image}
        alt='тут будет картинка'
      />
      <div className='news-card__info'>
        <p className='news-card__date'>{dataCard.date_posted}</p>
        <h3 className='news-card__title'>{dataCard.title}</h3>
        <p className='news-card__description'>{dataCard.content}</p>
      </div>
    </li>
  );
};
