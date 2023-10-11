import { OrgWrapper } from '../../components/OrgWrapper';

export const School = () => {
  return (
    <OrgWrapper org='Школы'>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Возраст</h3>
          <p className='school__text'></p>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Профиль</h3>
          <p className='school__text'></p>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Классы</h3>
          <p className='school__text'></p>
        </div>
      </div>
      <div className='school'>
        <div className='school__activity'>
          <h3 className='school__title'>Иностранные языки</h3>
          <p className='school__text'></p>
        </div>
      </div>
    </OrgWrapper>
  );
};
