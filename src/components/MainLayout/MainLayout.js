import React from 'react';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import './MainLayout.scss';

export class MainLayout extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
