import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Home from './components/pages/Home/HomePage'
import Faq from './components/pages/FAQ/FaqPage'
import Rules from './components/pages/Rules/RulesPage'
import Contact from './components/pages/Contact/ContactPage'
import NotFound from './components/pages/NotFound/NotFoundPage'
//import Product from './components/Product/ProductItem';
import Cart from './components/pages/Cart/CartPage'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path={'/rules'} component={Rules} />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/faq'} component={Faq} />
          <Route exact path={'/rules'} component={Rules} />
          <Route exact path={'/contact'} component={Contact} />
          <Route exact path={'/cart'} component={Cart} />
          {/* <Route exact path={'/product/:id'} component={Product} /> */}
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    )
  }
}

library.add(fab, fas, faShoppingBag)

export default App
