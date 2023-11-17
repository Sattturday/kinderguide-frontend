import './Activity.scss';

export const Activity = ({ text, type }) => {
  return (
    <>
      {text?.length > 0 && (
        <p className='activity'>
          <span className='activity__type'>{type}:</span> {text}
        </p>
      )}
    </>
  );
};
