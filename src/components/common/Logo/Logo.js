import React from 'react'
import LogoImg from '../../../../src/images/logo.png'
import { Link } from 'react-router-dom'
import './Logo.scss'

const Logo = () => (
  <Link to={'/'} className='logo'>
    <img src={LogoImg} alt={'logo'} />
    <h1 className='logo__company-name'>Outdoor shop</h1>
  </Link>
)

export default Logo
