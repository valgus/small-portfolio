import React from 'react';

const introduction = "Hi! I'm";
const name = 'Aleksandra Gureeva';
const info = ['Born in Russia', 'Living in Sweden'];

const Profile = ({ isCurrent }) => (
  <div className='profile-content'>
    <div className='padding-top-20 text-center'>
      <h2>{introduction}</h2>
      <h1>{name}</h1>
      <h2>
        <span>{info[0]}</span> / <span>{info[1]}</span>
      </h2>
    </div>
    <div className={'profile-image' + (!isCurrent ? ' stuck' : '')}></div>
  </div>
);

export default Profile;
