import React from 'react'
import { bindActionCreators } from 'redux'
import { qtyAdd, qtyRemove, removeFromCart } from '../../actions/cartActions'
import { connect } from 'react-redux'
import './Cart.scss'

export class CartOrder extends React.Component {
  createOrder() {
    return this.props.cart.added.map(product => {
      return (
        <div key={product.id}>
          <div>
            <img src={product.image} alt='product' />
          </div>

          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>

          <div>${(product.price * product.qty).toFixed(2)}</div>
          <div>
            <button onClick={() => this.props.qtyRemove(product)}>-</button>
            <p>{product.qty}</p>
            <button onClick={() => this.props.qtyAdd(product)}>+</button>
            {/* <button onClick={() => this.props.removeFromCart(product)}>
              delete
            </button> */}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Your shopping:</h1>

        {this.createOrder()}

        <div>
          <div></div>
          <div>
            <input placeholder='Enter discount code' />
          </div>
        </div>
        <div>
          <div></div>
          <div>Total: $ {this.props.cart.summary.toFixed(2)}</div>
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ qtyAdd, qtyRemove, removeFromCart }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CartOrder)
