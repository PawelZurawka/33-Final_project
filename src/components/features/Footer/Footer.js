import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <span className='footer__caption'>
        Made with passion by{' '}
        <a
          href='https://github.com/PawelZurawka?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
        >
          Paweł Żurawka
        </a>
      </span>
      <div className='footer__menu-wrapper'>
        <ul className='footer__menu'>
          <li className='footer__menu-item'>
            <NavLink
              exact
              to='/'
              className='footer__menu-link'
              activeClassName='activeLink'
              activeStyle={{ fontWeight: 'bold' }}
            >
              Home
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              exact
              to='/faq'
              className='footer__menu-link'
              activeClassName='activeLink'
              activeStyle={{ fontWeight: 'bold' }}
            >
              FAQ
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              exact
              to='/rules'
              className='footer__menu-link'
              activeClassName='activeLink'
              activeStyle={{ fontWeight: 'bold' }}
            >
              Rules
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              exact
              to='/contact'
              className='footer__menu-link'
              activeClassName='activeLink'
              activeStyle={{ fontWeight: 'bold' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
