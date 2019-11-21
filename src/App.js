import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'

// Import components
import MainLayout from './components/layout/MainLayout/MainLayout'
import Home from './components/Home/Home'
import FAQ from './components/FAQ/FAQ'
import Rules from './components/Rules/Rules'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import Product from './components/SingleProduct/SingleProduct'
import Cart from './components/Cart/Cart'
import CartSummary from './components/Cart/CartSummary'

import './App.scss'

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  }
}

function bounce(val) {
  return spring(val, {
    stiffness: 300,
    damping: 20,
  })
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.3,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.7),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className='route-wrapper'
          >
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/faq'} component={FAQ} />
            <Route exact path={'/rules'} component={Rules} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/cartsummary'} component={CartSummary} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    )
  }
}

export default App
