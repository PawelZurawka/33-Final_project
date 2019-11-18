import React from 'react'
import CartOrder from './CartOrder'
import { Container, Card } from 'reactstrap'

const Cart = () => (
  <Container className='cart'>
    <Card>
      <CartOrder />
    </Card>
  </Container>
)

export default Cart
