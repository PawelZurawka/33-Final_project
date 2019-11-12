import React from 'react';
import LogoImg from '../../../../src/images/logo.png';
import './Logo.scss';

const Logo = () => (
  <div className='logo__wrapper'>
    <img src={LogoImg} alt={'logo'} />
    <h1 className='logo'>Outdoor shop</h1>
  </div>
);

export default Logo;
