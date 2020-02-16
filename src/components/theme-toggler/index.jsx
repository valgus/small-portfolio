import React from 'react';

const labels = ['Light', 'Dark'];

const ThemeToggler = ({ onClick, current }) => (
  <div className='btn-group btn-group-toggle theme-toggler'>
    {labels.map((label, index) => (
      <label
        className={'btn toggle-item' + (current === index ? ' active' : '')}
        onClick={() => onClick(index)}
        key={`toggle-item-${index}`}
      >
        <input type='radio' name='options' id='option2' />
        {label}
      </label>
    ))}
  </div>
);

export default ThemeToggler;
