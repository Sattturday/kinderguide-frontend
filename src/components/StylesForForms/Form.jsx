import './Form.scss';
import { Input } from '../common/Input';
import { InputCheckbox } from '../InputCheckbox';
import { Button } from '../common/Button';

function Form({ title, variant, subtitle, button, children }) {
  const inputs = [
    {
      inputId: 'test',
      labelText: 'test',
      variant: 'form',
      errorText: 'error',
      name: 'name',
      onChange: () => console.log('inputTest'),
      value: '',
      placeholder: 'test',
      isActive: 'false',
    },
  ];
  return (
    <div className='form'>
      <div className={`form__container form__container_kind_${variant}`}>
        <h1 className='form__title'>{title}</h1>
        <h2 className='form__subtitle'>{subtitle}</h2>
        <div className='form__inputsContainer'>
          {inputs?.map((item) => (
            <Input
              key={1}
              inputId={item.inputId}
              labelText={item.labelText}
              variant={item.variant}
              errorText={item.errorText}
              name={item.name}
              onChange={item.onChange}
              value={item.value}
              placeholder={item.placeholder}
              isActive={item.isActive}
            />
          ))}
          {variant === 'login' && (
            <div className='form__checkboxContainer'>
              <InputCheckbox />
            </div>
          )}
        </div>
        <Button
          variant='primary'
          color='fill'
          type='submit'
          size='medium'
          width='auto'
          onClick={() => console.log('testForm')}
        >
          {button}
        </Button>
        {children}
      </div>
    </div>
  );
}

export default Form;
