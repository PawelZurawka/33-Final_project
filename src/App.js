import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Faq from './components/FAQ/Faq';
import Regulations from './components/Regulations/Regulations';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/ProductItem';
import Cart from './components/Cart/Cart';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/faq'} component={Faq} />
            <Route exact path={'/regulations'} component={Regulations} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
