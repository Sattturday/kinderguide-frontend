import './OnTopButton.scss';

import { useState, useEffect } from 'react';

export const OnTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setScroll(window.scrollY);
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`on-top-button ${isVisible ? 'on-top-button_visible' : ''}`}
    >
      <button
        className='on-top-button__container'
        onClick={() => window.scrollTo(0, 0)}
      ></button>
      ;
    </div>
  );
};
