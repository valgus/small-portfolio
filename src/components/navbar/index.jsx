import React from 'react';

const links = [
  {
    name: 'Profile',
    href: '#profile',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Leisure',
    href: '#leisure',
  },
  {
    name: 'Inspiration',
    href: '#inspiration',
  },
  {
    name: 'Contacts',
    href: '#contacts',
  },
];

const Navbar = React.forwardRef(({ current, onClick }, ref) => (
  <nav className='nav flex-column' ref={ref}>
    {links.map((link, index) => (
      <a
        onClick={() => onClick(index)}
        className={'nav-link' + (current === index ? ' active' : '')}
        href={link.href}
        key={`nav-link-${index}`}
      >
        <span>{link.name}</span>
      </a>
    ))}
  </nav>
));
export default Navbar;
