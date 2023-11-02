import { useSelector } from 'react-redux';
import { Popup } from '../common/Popup';
import './NewsModal.scss';

export const NewsModal = () => {
  const isOpen = useSelector((state) => state.modals.isOpenNewsModal);

  const title = useSelector((state) => state.newsPopup.title);
  const img = useSelector((state) => state.newsPopup.img);
  const text = useSelector((state) => state.newsPopup.text);

  return (
    <Popup isOpen={isOpen} name='news-modal'>
      <h2 className='newsModal__title'>{title}</h2>
      <img className='newsModal__img' src={img}></img>
      <p className='newsModal__text'>{text}</p>
    </Popup>
  );
};
