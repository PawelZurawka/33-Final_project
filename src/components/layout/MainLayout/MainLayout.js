import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import NavBar from '../../NavBar/NavBar'

const MainLayout = ({ children }) => (
  <PageContainer>
    <NavBar />
    {children}
  </PageContainer>
)

export default MainLayout
