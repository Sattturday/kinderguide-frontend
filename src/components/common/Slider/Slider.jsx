import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

import { imageSlides } from '../../../constants/constants';
import { Button } from '../Button';
import './Slider.scss';

export const Slider = ({ slides = imageSlides, slidesPerView = 1 }) => {
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

  const handleSlideChange = () => {
    if (swiperInstance) {
      console.log('swiperInstance', swiperInstance);
    }
  };

  return (
    <div className='slider'>
      <Button variant='square' onClick={goPrev}>
        &larr;
      </Button>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image_url}>
            <img
              className='slider-image'
              src={slide.image_url}
              alt="it's image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button variant='square' onClick={goNext}>
        &rarr;
      </Button>
    </div>
  );
};
