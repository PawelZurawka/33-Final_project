import React from 'react';
import { connect } from 'react-redux';

// Import styles
import './Cart.scss';

export class CartSummary extends React.Component {
  summary() {
    return this.props.cart.added.map(product => {
      return (
        <div className='cart-summary-product row' key={product.id}>
          <div className='cart-summary-product-name col-6'>{product.name}</div>
          <div className='cart-summary-product-price col-2'>
            {product.quantity}
          </div>
          <div className='cart-summary-product-price col-2'>
            $ {product.price.toFixed(2)}
          </div>
          <div className='cart-summary-product-price col-2'>
            $ {(product.price * product.quantity).toFixed(2)}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='cart-summary'>
        <h1 className='cart-summary-header'>Your order</h1>
        <div className='cart-summary-main row'>
          <div className='cart-summary-line-name col-6'>Name</div>
          <div className='cart-summary-main-item col-2'>Quantity</div>
          <div className='cart-summary-main-item col-2'>Price</div>
          <div className='cart-summary-main-item col-2'>Full price</div>
        </div>

        {this.summary()}

        <div className='row cart-summary-main'>
          <div className='cart-summary-main-item-name col-10'>TOTAL</div>
          <div className='cart-summary-main-item-total col-2'>
            $ {this.props.cart.summary.toFixed(2)}
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

export default connect(mapStateToProps)(CartSummary);
