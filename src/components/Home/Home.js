import React from 'react'
import { ProductsList } from '../ProductsList/ProductsList'
import { sort } from '../../utils/Sort/sort'
import { connect } from 'react-redux'
import { Button, Row, Col, Card } from 'reactstrap'
import Carousel from '../features/Carousel/Carousel'
import Footer from '../Footer/Footer'
import './Home.scss'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.products,
    }
  }

  sort(event) {
    this.setState({
      products: this.state.products.sort(
        sort(event.target.dataset.prop, event.target.dataset.order)
      ),
    })
  }

  render() {
    return (
      <>
        <Carousel />
        <Row>
          <Col className='sort' sm={12} md={3}>
            <Card>
              <h4 className='sort__header'>Sort by:</h4>
              <Button
                className='sort__btn'
                color='link'
                data-prop='name'
                data-order='asc'
                onClick={event => this.sort(event)}
              >
                Name: A to Z
              </Button>
              <Button
                className='sort__btn'
                color='link'
                data-prop='name'
                data-order='desc'
                onClick={event => this.sort(event)}
              >
                Name: Z to A
              </Button>
              <Button
                className='sort__btn'
                color='link'
                data-prop='price'
                data-order='asc'
                onClick={event => this.sort(event)}
              >
                Price: low to high
              </Button>
              <Button
                className='sort__btn'
                color='link'
                data-prop='price'
                data-order='desc'
                onClick={event => this.sort(event)}
              >
                Price: high to low
              </Button>
            </Card>
          </Col>
          <Col md={9}>
            <ProductsList sorted={this.state} />
          </Col>
        </Row>
        <Footer />
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(Home)
