import './ServiceWorkCard.scss';

export function ServiceWorkCard({ dataCard }) {
  return (
    <li className='service-work-card'>
      <h3 className='service-work-card__header'>{dataCard.title}</h3>
      <p className='service-work-card__description'>{dataCard.description}</p>
    </li>
  );
}
