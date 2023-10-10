import { PatternFormat } from 'react-number-format';
import './InputTel.scss';

export const InputTel = ({ inputId, name, onChange, value }) => (
  <PatternFormat
    className='inputTel'
    id={inputId}
    name={name}
    onChange={onChange}
    value={value}
    type='tel'
    format='+7(###)###-##-##'
    allowEmptyFormatting
    mask='_'
  />
);
