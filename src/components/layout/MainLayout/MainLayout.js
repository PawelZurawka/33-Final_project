import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'

export class MainLayout extends React.Component {
  render() {
    return (
      <PageContainer>
        <NavBar />
        {this.props.children}
        <Footer />
      </PageContainer>
    )
  }
}
