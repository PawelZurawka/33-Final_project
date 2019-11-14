import React from 'react'
import Logo from '../../components/common/Logo/Logo'
import MainMenu from '../../components/layout/MainMenu/MainMenu'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.scss'

class NavBar extends React.Component {
  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/FAQ', title: 'FAQ' },
      { path: '/rules', title: 'Rules' },
      { path: '/contact', title: 'Contact' },
    ],
  }

  render() {
    const { links } = this.state
    return (
      <nav className='navbar'>
        <Logo />
        <div className='navbar__wrapper'>
          <MainMenu links={links} />
          <NavLink className='cart__icon' to='/cart' activeClassName='active'>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar
