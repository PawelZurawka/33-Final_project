import React from 'react'
import { bindActionCreators } from 'redux'
import { qtyAdd, qtyRemove, removeFromCart } from '../../actions/cartActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Input } from 'reactstrap'
import Button from '../common/Button/Button'
import cutText from '../../utils/cutText/cutText'
import PageTitle from '../common/PageTitle/PageTitle'
import './CartOrder.scss'

export class CartOrder extends React.Component {
  createOrder() {
    return this.props.cart.added.map(product => {
      return (
        <div key={product.id}>
          <Row className='cart-order'>
            <Col md={2}>
              <Link to={'product/' + product.id}>
                <img
                  className='cart-order__image'
                  src={product.image}
                  alt='product'
                />
              </Link>
            </Col>
            <Col md={5}>
              <h2 className='cart-order__name'>{product.name}</h2>
              <p className='cart-order__description'>
                {cutText(product.description, 150)}
              </p>
            </Col>
            <Col md={2}>$ {(product.price * product.qty).toFixed(2)}</Col>
            <Col md={3}>
              <div className='cart-order__btns-wrapper'>
                <Button onClick={() => this.props.qtyRemove(product)}>-</Button>
                <span className='cart-order__qty'>{product.qty}</span>
                <Button onClick={() => this.props.qtyAdd(product)}>+</Button>

                <Button onClick={() => this.props.removeFromCart(product)}>
                  delete
                </Button>
              </div>
              <Row></Row>
            </Col>
          </Row>
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <PageTitle>Your shopping:</PageTitle>
        {this.createOrder()}
        <div className='cart-order__discount-wrapper'>
          <Input
            className='cart-order__discount'
            placeholder='Enter discount code'
          />
        </div>
        <div className='cart-order__total'>
          Total: $ {this.props.cart.summary.toFixed(2)}
        </div>
        <div className='cart-order__summary-btn'>
          <Link to='/cartsummary'>
            <Button>To summary</Button>
          </Link>
        </div>
      </>
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
