import React from 'react';

const title = "Do you want to contact me? Don't hesitate and write me:";
const email = 'gureeva.alexandra@list.ru';

const Contacts = () => (
  <div className='colored-field'>
    <div className='row'>
      <div className='col-md-12 text-center'>
        <h1>{title}</h1>
        <h5>{email}</h5>
      </div>
    </div>
  </div>
);
export default Contacts;
