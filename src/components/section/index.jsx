import React from 'react';

const Section = ({ id, children }) => (
  <section className='portfolio-section' id={id}>
    {children}
  </section>
);

export default Section;
