import React from 'react'
import { connect } from 'react-redux'

// Import styles
import './Cart.scss'

export class CartSummary extends React.Component {
  summary() {
    return this.props.cart.added.map(product => {
      return (
        <div key={product.id}>
          <div>{product.name}</div>
          <div>{product.qty}</div>
          <div>$ {product.price.toFixed(2)}</div>
          <div>$ {(product.price * product.qty).toFixed(2)}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Your order</h1>
        <div>
          <div>Name</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Full price</div>
        </div>

        {this.summary()}

        <div>
          <div>TOTAL</div>
          <div>$ {this.props.cart.summary.toFixed(2)}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CartSummary)
