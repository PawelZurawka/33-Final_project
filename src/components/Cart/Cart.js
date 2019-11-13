import React from 'react'
import CartOrder from './CartOrder'
import CartSummary from './CartSummary'
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
        <div>
          <CartOrder />
          <div>
            <div>
              <button
                onClick={() => {
                  this.initialSummary()
                }}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )
    } else if (this.state.orderSummary === true) {
      return <CartSummary />
    }
  }
}
