import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/faq'} component={FAQ} />
            <Route exact path={'/rules'} component={Rules} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/cartsummary'} component={CartSummary} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    )
  }
}

export default App
