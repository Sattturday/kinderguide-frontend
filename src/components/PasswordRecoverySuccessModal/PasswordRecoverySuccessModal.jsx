import './PasswordRecoverySuccessModal.scss';

import { Popup } from '../common/Popup';

import { Button } from '../common/Button';

export const PasswordRecoverySuccessModal = ({
  isOpen,
  onClose,
  onSubmit = () => {},
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    console.log('click');
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      name='password-recovery-success-modal'
    >
      <h2 className='password-recovery-success-modal__title'>
        Пароль успешно изменен
      </h2>

      <Button
        type='button'
        width='408px'
        size='large'
        color={'fill'}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Отправить
      </Button>
    </Popup>
  );
};
