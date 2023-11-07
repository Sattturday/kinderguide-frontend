import { useGetSchoolFavoritesQuery } from '../../api/schoolApi';
import { ShowList } from '../../components/ShowList';
import './Favorites.scss';
import { NavigationFavorites } from './components/NavigationFavorites';

export function Favorites() {
  const { data = [] } = useGetSchoolFavoritesQuery();
  console.log(data);
  return (
    <section className='favorites'>
      <div className='wrapper'>
        <h1 className='favorites__title'>Избранное</h1>
        <div className='favorites__block'>
          <NavigationFavorites />
          <ShowList data={data} />
        </div>
      </div>
    </section>
  );
}
