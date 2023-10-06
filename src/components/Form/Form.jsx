import './Form.scss';
import { Button } from '../common/Button';

function Form({ variant, button, handleSubmit, name, children }) {
  return (
    <form
      name={name}
      className={`form__container form__container_kind_${variant}`}
      onSubmit={handleSubmit}
    >
      {children}
      <Button
        variant='primary'
        color='fill'
        type='submit'
        size='medium'
        width='auto'
      >
        {button}
      </Button>
    </form>
  );
}

export default Form;
