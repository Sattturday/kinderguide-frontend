import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './YandexMap.scss';

export const YandexMap = (props) => {
  const coordinates = props.coordinates || [55.751999, 37.617734];

  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '030fd2ff-4ac3-4840-96a1-534808cedc6b',
      }}
    >
      <Map
        className='direction'
        defaultState={{
          center: coordinates,
          zoom: 12,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
};
