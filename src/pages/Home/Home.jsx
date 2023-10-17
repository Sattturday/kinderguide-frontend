import './Home.scss';
import { Promo } from './components/Promo';
import { Resources } from './components/Resources';
import { About } from './components/About';
import { ServiceWork } from './components/ServiceWork';
import { ImageSlider } from '../../components/ImageSlider';
import { album, exampleSlides } from '../../utils/constants';
import { Slider } from '../../components/common/Slider/Slider';

export function Home() {
  return (
    <>
      <Slider slides={exampleSlides} />
      <ImageSlider images={album} width='738px' />
      <Promo />
      <About />
      <ServiceWork />
      <Resources />
    </>
  );
}
