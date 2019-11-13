import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import { Header } from '../../Header/Header'
import { Footer } from '../../Footer/Footer'

export class MainLayout extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
        {this.props.children}
        <Footer />
      </PageContainer>
    )
  }
}
