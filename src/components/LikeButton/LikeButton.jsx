import { useSelector } from 'react-redux';

import './LikeButton.scss';

export const LikeButton = ({ isLiked, onLike }) => {
  const user = useSelector((state) => state.auth.user);

  const handleLike = () => {
    if (user) {
      console.log('toggle');
      onLike();
    } else {
      console.log('popup');
      onLike();
    }
  };

  return (
    <button
      className={`like-button${isLiked ? ' like-button_active' : ''}`}
      type='button'
      onClick={handleLike}
    />
  );
};
