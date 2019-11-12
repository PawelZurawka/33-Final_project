import React from 'react'
import CartOrder from './CartOrder'
import CartSummary from './CartSummary'

// Import styles
import './Cart.scss'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      summaryOrder: false,
    }
  }

  initialSummary() {
    this.setState({
      summaryOrder: true,
    })
  }

  render() {
    if (this.state.summaryOrder === false) {
      return (
        <div className='cart'>
          <CartOrder />
          <div>
            <div></div>
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
    } else if (this.state.summaryOrder === true) {
      return <CartSummary />
    }
  }
}
