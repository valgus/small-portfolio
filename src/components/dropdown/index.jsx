import React from 'react';

const Dropdown = ({ title, items, onChange }) => {
  const id = title.split(' ').join('');
  return (
    <div className='dropdown'>
      <button
        className='btn btn-default dropdown-toggle'
        type='button'
        data-toggle='dropdown'
        id={`dropdownMenu-${id}`}
        aria-haspopup='true'
        aria-expanded='true'
      >
        {title}
        <span className='caret'></span>
      </button>
      <ul className='dropdown-menu' aria-labelledby={id}>
        {items.map((item, index) => (
          <li key={`dropdown-${item}-${index}`}>
            <a className='dropdown-a' onClick={() => onChange(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
