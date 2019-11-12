import React from 'react'
import { Header } from '../../features/Header/Header'
import { Footer } from '../../features/Footer/Footer'
import './MainLayout.scss'

export class MainLayout extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

// import React from 'react';
// import PageContainer from '../PageContainer/PageContainer';
// import NavBar from '../../features/NavBar/NavBar';

// const MainLayout = ({ children }) => (
//   <PageContainer>
//     <NavBar />
//     {children}
//   </PageContainer>
// );

// export default MainLayout;
