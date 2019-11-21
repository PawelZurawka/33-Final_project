import React from 'react'
import Footer from '../Footer/Footer'
import './NotFound.scss'

const NotFound = () => (
  <>
    <div className='notfound'>
      <img src={'/images/404-Error.png'} alt={'404 not found :('} />
    </div>
    <Footer />
  </>
)

export default NotFound
