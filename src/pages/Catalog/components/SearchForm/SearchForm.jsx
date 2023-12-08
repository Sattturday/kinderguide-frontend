import { memo } from 'react';

import Search from '../../../../images/SearchForm/Search.svg';
import Clean from '../../../../images/SearchForm/Clean.svg';
import { Input } from '../../../../components/common/Input';
import { Button } from '../../../../components/common/Button';
import './SearchForm.scss';

export const SearchForm = memo(function SearchForm({
  value,
  onChange,
  onSubmit,
  onClear,
}) {
  const handleClear = (e) => {
    onClear();
    onSubmit({ preventDefault: () => {} }); // передаем заглушку для preventDefault
  };

  return (
    <form name='search' className='search' onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        variant='search'
        placeholder='Поиск'
        isValid='true'
      />
      <div className='search__searchIcon'>
        <Button variant='link' size='small' onClick={handleClear}>
          <img className='search__cleanImg' src={Clean} alt='clean' />
        </Button>
        <span className='search__line'></span>
        <Button variant='link' size='small' type='submit'>
          <img className='search__searchImg' src={Search} alt='search' />
        </Button>
      </div>
    </form>
  );
});
