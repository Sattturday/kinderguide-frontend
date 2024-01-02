import './EmptyPage.scss';

export function EmptyPage({ variant, data, children }) {
  return (
    <section className={`empty-page empty-page_type_${variant}`}>
      {variant === 'notfound' && (
        <img className='empty-page__image' src={data.img} alt={data.imgName} />
      )}
      {data.title && <h2 className='empty-page__title'>{data.title}</h2>}
      {data.text && <p className='empty-page__text'>{data.text}</p>}
      {variant === 'favorite' && (
        <img className='empty-page__image' src={data.img} alt={data.imgName} />
      )}
      {children}
    </section>
  );
}
