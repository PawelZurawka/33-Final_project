import React from 'react'
import CartOrder from './CartOrder'
import CartSummary from './CartSummary'
import { Container, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import Button from '../common/Button/Button'
import './Cart.scss'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderSummary: false,
    }
  }

  initialSummary() {
    this.setState({
      orderSummary: true,
    })
  }

  render() {
    if (this.state.orderSummary === false) {
      return (
        <Container className='cart'>
          <Card>
            <CartOrder />
            <div className='cart__pay-btn'>
              <Link to='/cartsummary'>
                <Button
                  onClick={() => {
                    this.initialSummary()
                  }}
                >
                  To summary
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      )
    } else if (this.state.orderSummary === true) {
      return <CartSummary />
    }
  }
}
