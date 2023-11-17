import filled from '../../images/Stars/Star-filled.svg';
import half from '../../images/Stars/Star-half.svg';
import empty from '../../images/Stars/Star-empty.svg';
import './Stars.scss';

export const Stars = ({ rating, children, setter = () => {} }) => {
  const starFilled = Math.floor(rating);
  const starEmpty = Math.floor(5 - rating);
  const starHalf = 5 - starFilled - starEmpty;
  // Ю. Костыль для мапа звездочек
  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (e) => {
    if (e.target.id.includes('sf')) {
      setter(+e.target.id.slice(3));
      return;
    }
    setter(+starFilled + +e.target.id.slice(3));
  };

  return (
    <div className='stars'>
      {stars.slice(0, starFilled).map((i) => (
        <img
          key={`sf+${i}`}
          id={`sf+${i}`}
          className='stars__star'
          src={filled}
          alt='Заполненная звезда'
          onClick={(e) => handleStarClick(e)}
        />
      ))}
      {starHalf !== 0 && (
        <img
          className='stars__star'
          src={half}
          alt='Частично заполненная звезда'
        />
      )}
      {stars.slice(0, starEmpty).map((i) => (
        <img
          key={`se+${i}`}
          id={`se+${i}`}
          className='stars__star'
          src={empty}
          alt='Пустая звезда'
          onClick={(e) => handleStarClick(e)}
        />
      ))}
      {children}
    </div>
  );
};
