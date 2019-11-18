import React from 'react'
import CartOrder from './CartOrder'
import { Container, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import Button from '../common/Button/Button'
import './Cart.scss'

const Cart = () => (
  <Container className='cart'>
    <Card>
      <CartOrder />
      <div className='cart__pay-btn'>
        <Link to='/cartsummary'>
          <Button>To summary</Button>
        </Link>
      </div>
    </Card>
  </Container>
)

export default Cart
