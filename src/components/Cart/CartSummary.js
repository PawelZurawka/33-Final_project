import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'reactstrap'
import PageTitle from '../common/PageTitle/PageTitle'
import ButtonBack from '../common/ButtonBack/ButtonBack'
import Modal from '../features/Modal/Modal'
import Footer from '../Footer/Footer'
import './CartSummary.scss'

export class CartSummary extends React.Component {
  summary() {
    return this.props.cart.added.map(product => {
      return (
        <Row className='cart-summary__list' key={product.id}>
          <Col xs={4}>{product.name}</Col>
          <Col xs={3}>$ {product.price.toFixed(2)}</Col>
          <Col xs={2}>{product.qty}</Col>
          <Col xs={3}>$ {(product.price * product.qty).toFixed(2)}</Col>
        </Row>
      )
    })
  }

  render() {
    return (
      <>
        <Card className='cart-summary'>
          <PageTitle className='page-title'>Your order</PageTitle>
          <Row className='cart-summary__header'>
            <Col xs={4}>Name</Col>
            <Col xs={3}>Price</Col>
            <Col xs={2}>Quantity</Col>
            <Col xs={3}>Full price</Col>
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
        <Footer />
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CartSummary)
