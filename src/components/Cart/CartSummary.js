import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'reactstrap'
import PageTitle from '../common/PageTitle/PageTitle'
import ButtonBack from '../common/ButtonBack/ButtonBack'
import Modal from '../features/Modal/Modal'
import './CartSummary.scss'

export class CartSummary extends React.Component {
  summary() {
    return this.props.cart.added.map(product => {
      return (
        <Row className='cart-summary__list' key={product.id}>
          <Col md={4}>{product.name}</Col>
          <Col md={3}>$ {product.price.toFixed(2)}</Col>
          <Col md={2}>{product.qty}</Col>
          <Col md={3}>$ {(product.price * product.qty).toFixed(2)}</Col>
        </Row>
      )
    })
  }

  render() {
    return (
      <Card>
        <PageTitle>Your order</PageTitle>
        <Row className='cart-summary__header'>
          <Col md={4}>Name</Col>
          <Col md={3}>Price</Col>
          <Col md={2}>Quantity</Col>
          <Col md={3}>Full price</Col>
        </Row>
        <div className='cart-summary__list-wrapper'>{this.summary()}</div>
        <span className='cart-summary__total'>
          TOTAL: $ {this.props.cart.summary.toFixed(2)}
        </span>
        <div className='cart-summary__btns'>
          <ButtonBack></ButtonBack>
          <Modal></Modal>
        </div>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CartSummary)
