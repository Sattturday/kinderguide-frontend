import './Home.scss';
import { Promo } from './components/Promo';
import { Resources } from './components/Resources';
import { About } from './components/About';
import { ServiceWork } from './components/ServiceWork';
import { SearchForm } from '../../components/SearchForm';

export function Home() {
  return (
    <>
      <Promo />
      <About />
      <SearchForm />
      <ServiceWork />
      <Resources />
    </>
  );
}
