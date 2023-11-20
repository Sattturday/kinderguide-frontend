import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const BigMap = ({ cardData }) => {
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
          center: [55.751999, 37.617734],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        {cardData.map((card) => (
          <Placemark
            key={card.id}
            geometry={card.coordinates}
            options={{
              iconColor: 'violet',
            }}
            properties={{
              hintContent: `<h2>${card.name}</h2>`,
              balloonContent: `<div><a href=/${card.type}s/${card.id}>${card.name}</a></div>`,
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        ))}
      </Map>
    </YMaps>
  );
};
