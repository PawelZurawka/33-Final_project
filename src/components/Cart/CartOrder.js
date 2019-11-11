import React from 'react';
import { bindActionCreators } from 'redux';
import { quantityAdd, quantityRemove } from '../../actions/cartActions';
import { connect } from 'react-redux';

// Import styles
import './Cart.scss';

export class CartOrder extends React.Component {
  createOrder() {
    return this.props.cart.added.map(product => {
      return (
        <div className='cart-order-products row' key={product.id}>
          <div className='cart-order-products-image col-2'>
            <img
              className='cart-order-products-img'
              src={product.image}
              alt='product-photo'
            />
          </div>

          <div className='cart-order-products-description col-5'>
            <h2 className='cart-order-products-description-name'>
              {product.name}
            </h2>
            <p className='cart-order-products-description-text'>
              {product.description}
            </p>
          </div>

          <div className='cart-order-products-price col-2'>
            ${(product.price * product.quantity).toFixed(2)}
          </div>
          <div className='cart-order-products-quantity col-3'>
            <button
              className='cart-order-products-quantity-btn'
              onClick={() => this.props.quantityRemove(product)}
            >
              -
            </button>
            <p className='cart-order-products-quantity-value'>
              {product.quantity}
            </p>
            <button
              className='cart-order-products-quantity-btn'
              onClick={() => this.props.quantityAdd(product)}
            >
              +
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className='cart-order-header'>Your shopping:</h1>

        {this.createOrder()}

        <div className='cart-order-discount-code row'>
          <div className='col-9'></div>
          <div className='col-3'>
            <input className='cart-order-input' placeholder='Discount code' />
          </div>
        </div>
        <div className='cart-order-total row'>
          <div className='col-9'></div>
          <div className='cart-order-total-pay col-3'>
            Total: $ {this.props.cart.summary.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ quantityAdd, quantityRemove }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CartOrder);
