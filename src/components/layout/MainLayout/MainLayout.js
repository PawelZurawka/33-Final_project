import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'

const MainLayout = ({ children }) => (
  <PageContainer>
    <NavBar />
    {children}
    <Footer />
  </PageContainer>
)

export default MainLayout
