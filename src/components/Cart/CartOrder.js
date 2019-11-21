import React from 'react'
import { bindActionCreators } from 'redux'
import { qtyAdd, qtyRemove, removeFromCart } from '../../actions/cartActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Card } from 'reactstrap'
import Button from '../common/Button/Button'
import cutText from '../../utils/cutText/cutText'
import PageTitle from '../common/PageTitle/PageTitle'
import Alert from '../common/Alert/Alert'
import './CartOrder.scss'

export class CartOrder extends React.Component {
  createOrder() {
    return (
      this.props.cart.added &&
      this.props.cart.added.map(product => {
        return (
          <div key={product.id}>
            <Row className='cart-order__product'>
              <Col md={2}>
                <Link to={'product/' + product.id}>
                  <img
                    className='cart-order__image'
                    src={product.image}
                    alt='product'
                  />
                </Link>
              </Col>
              <Col md={4}>
                <h2 className='cart-order__name'>{product.name}</h2>
                <p className='cart-order__description'>
                  {cutText(product.description, 150)}
                </p>
              </Col>
              <Col className='cart-order__price' md={2}>
                $ {(product.price * product.qty).toFixed(2)}
              </Col>
              <Col md={4}>
                <div className='cart-order__btns-wrapper'>
                  <Button onClick={() => this.props.qtyRemove(product)}>
                    -
                  </Button>
                  <span className='cart-order__qty'>{product.qty}</span>
                  <Button onClick={() => this.props.qtyAdd(product)}>+</Button>

                  <Button
                    variant='danger'
                    onClick={() => this.props.removeFromCart(product)}
                  >
                    delete
                  </Button>
                </div>
                <Row></Row>
              </Col>
            </Row>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <>
        {this.props.cart.summary > 0 ? (
          <Card className='cart-order'>
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
          </Card>
        ) : (
          <Alert variant='info'>Shopping cart is empty!</Alert>
        )}
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
