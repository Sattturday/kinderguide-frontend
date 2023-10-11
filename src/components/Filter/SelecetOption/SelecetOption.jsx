import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import './SelecetOption.scss';

export function SelectOption({ multiple, value, onChange, options }) {
  const [inputValue, setInputValue] = useState('');
  const [searchOption, setSearchOption] = useState([options]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 200);
  });

  function searchOptions() {
    const searchOpt = options.filter((option) => {
      return option.label.toLowerCase().includes(inputValue.toLowerCase());
    });
    setSearchOption(searchOpt);
  }

  useEffect(() => {
    searchOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
    setInputValue('');
  }

  function selectOption(option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape': {
          setIsOpen(false);
          break;
        }
        default:
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);
    const newRef = containerRef.current;

    return () => {
      newRef.removeEventListener('keydown', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
      tabIndex={0}
      className='container'
    >
      <div className='wrapper-value'>
        <span className='value'>
          {multiple
            ? value.map((v) => (
                <button
                  key={v.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                  className='option-badge'
                >
                  {v.label}
                  <span className='remove-btn'>&times;</span>
                </button>
              ))
            : value?.label}
          <input
            className='search-value'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className='clear-btn'
      >
        &times;
      </button>
      <div className='divider'></div>
      <div className='caret'></div>
      <ul className={`options ${isOpen ? 'show' : ''}`} tabIndex={1}>
        {searchOption.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.id}
            className={`option ${isOptionSelected(option) ? 'selected' : ''} ${
              index === highlightedIndex ? 'highlighted' : ''
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
