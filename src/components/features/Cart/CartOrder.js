import React from 'react'
import { bindActionCreators } from 'redux'
import { qtyAdd, qtyRemove } from '../../../actions/cartActions'
import { connect } from 'react-redux'

// Import styles
import './Cart.scss'

export class CartOrder extends React.Component {
  createOrder() {
    return this.props.cart.added.map(product => {
      return (
        <div className='cart__order' key={product.id}>
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
          <div>
            <input placeholder='Enter discount code' />
          </div>
        </div>
        <div>
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
  return bindActionCreators({ qtyAdd, qtyRemove }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CartOrder)
