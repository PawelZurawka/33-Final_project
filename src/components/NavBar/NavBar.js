import React from 'react'
import Logo from '../../components/common/Logo/Logo'
import MainMenu from '../../components/layout/MainMenu/MainMenu'
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
        <MainMenu links={links} />
      </nav>
    )
  }
}

export default NavBar
