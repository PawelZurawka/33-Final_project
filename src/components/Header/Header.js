import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

export const Header = () => {
  return (
    <div className='header'>
      <nav className='top-bar'>
        <a href='/' className='top-bar__logo'>
          <img src='/images/logo.png' alt='logo' />
          <span className='top-bar__logo-shop-name'>Outdoor shop</span>
        </a>
        <div className='top-bar__links-wrapper'>
          <div>
            <ul className='top-bar__links'>
              <li className='top-bar__item'>
                <NavLink
                  exact
                  to='/'
                  className='top-bar__link'
                  activeClassName='activeLink'
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  Home
                </NavLink>
              </li>
              <li className='top-bar__item'>
                <NavLink
                  exact
                  to='/faq'
                  className='top-bar__link'
                  activeClassName='activeLink'
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  FAQ
                </NavLink>
              </li>
              <li className='top-bar__item'>
                <NavLink
                  exact
                  to='/rules'
                  className='top-bar__link'
                  activeClassName='activeLink'
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  Rules
                </NavLink>
              </li>
              <li className='top-bar__item'>
                <NavLink
                  exact
                  to='/contact'
                  className='top-bar__link'
                  activeClassName='activeLink'
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            exact
            to='/cart'
            className='top-bar__cart'
            activeClassName='activeLink'
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
