import './Home.scss';
import { Promo } from './components/Promo';
import { News } from './components/News';
import { About } from './components/About';
import { ServiceWork } from './components/ServiceWork';

export function Home() {
  return (
    <>
      <Promo />
      <About />
      <ServiceWork />
      <News />
    </>
  );
}
