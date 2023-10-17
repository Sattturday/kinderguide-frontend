import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

import { Button } from '../Button';
import './Slider.scss';

/**
 * Компонент слайдера.
 * Используется для создания интерактивных слайдеров.
 */
export const Slider = ({
  slides,
  variant = 'cards',
  slidesPerView = 3,
  width = '80%',
}) => {
  let swiperInstance = null;

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleSwiper = (swiper) => {
    swiperInstance = swiper;
  };

  const pagination = variant === 'images' ? { clickable: true } : false;

  return (
    <div className={'slider' + ` slider_variant_${variant}`} style={{ width }}>
      <Button variant='square' width='52px' onClick={goPrev}>
        &larr;
      </Button>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={pagination}
        loop={true}
        onSwiper={handleSwiper}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <Button variant='square' width='52px' onClick={goNext}>
        &rarr;
      </Button>
    </div>
  );
};

Slider.propTypes = {
  /**
   * Массив слайдов
   */
  slides: PropTypes.array,
  /**
   * Вариант внешнего вида слайдера
   */
  variant: PropTypes.oneOf(['cards', 'images']),
  /**
   * Число слайдов, показывающихся за раз
   */
  slidesPerView: PropTypes.oneOf([1, 2, 3]),
  /**
   * Ширина слайдера
   */
  width: PropTypes.string,
};

Slider.defaultProps = {
  variant: 'cards',
  slidesPerView: 3,
  width: '80%',
};
