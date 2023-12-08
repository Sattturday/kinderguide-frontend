import { NAV_CATEGORY } from '../../../../utils/filterData';
import './Nav.scss';

export function Nav({ selected, onClickNavHandler }) {
  return (
    <nav className={`catalog__nav catalog__nav_${selected}`}>
      {NAV_CATEGORY.map((item, index) => {
        return (
          <button
            id={item.category}
            type='button'
            key={index}
            className={`catalog__nav-item ${
              selected === item.category ? 'catalog__nav-item_selected' : ''
            }`}
            onClick={onClickNavHandler}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
