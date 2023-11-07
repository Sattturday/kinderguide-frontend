import { ShowList } from '../../components/ShowList';
import './Favorites.scss';
import { NavigationFavorites } from './components/NavigationFavorites';

export function Favorites({ stateProfile }) {
  return (
    <section className='favorites'>
      <div className='wrapper'>
        <h1 className='favorites__title'>Избранное</h1>
        <div className='favorites__block'>
          <NavigationFavorites />
          <ShowList />
        </div>
      </div>
      {/* {stateProfile === 'school' ? <ShowList /> : ''}
      {stateProfile === 'gardens' ? <ShowList /> : ''}
      {stateProfile === 'all' ? <ShowList /> : ''} */}
    </section>
  );
}
