import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../common/Button';
import './ControlPanel.scss';

/**
 * Компонент контрольной панели.
 * Используется для создания панели управления пагинацией или слайдером.
 */
export const ControlPanel = ({ variant = 'primary' }) => {
  const [isActive, setIsActive] = useState(1);
  const itemNumber = 1;

  return (
    <div className={'control-panel' + ` control-panel_variant_${variant}`}>
      <Button
        variant='link'
        type='button'
        width='30px'
        size='small'
        onClick={undefined}
      />
      <div className='control-panel__container'>
        <Button
          variant={isActive === itemNumber ? 'square' : 'link'}
          type='button'
          size='small'
          onClick={undefined}
        >
          {itemNumber}
        </Button>
        <Button
          variant={isActive === itemNumber + 1 ? 'square' : 'link'}
          type='button'
          size='small'
          onClick={undefined}
        >
          {itemNumber + 1}
        </Button>
      </div>
      <Button
        variant='link'
        type='button'
        width='30px'
        size='small'
        onClick={undefined}
      />
    </div>
  );
};

ControlPanel.propTypes = {
  /**
   * Вариант внешнего вида панели
   */
  variant: PropTypes.oneOf(['primary', 'image']),
};

ControlPanel.defaultProps = {
  variant: 'primary',
};
