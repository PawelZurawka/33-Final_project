import React from 'react'
import Logo from '../../components/common/Logo/Logo'
import MainMenu from '../../components/layout/MainMenu/MainMenu'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
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
        <div className='navbar__menu'>
          <MainMenu links={links} />
          <NavLink
            className='navbar__cart-icon'
            to='/cart'
            activeClassName='active'
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {this.props.cart.added && this.props.cart.added.length > 0 && (
              <span>{this.props.cart.added.length}</span>
            )}
          </NavLink>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(NavBar)
