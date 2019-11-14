import React from 'react'
import { ProductsList } from '../ProductsList/ProductsList'
import { sort } from '../../utils/sort'
import { connect } from 'react-redux'
import { Container, Button, Row, Col } from 'reactstrap'
import Carousel from '../features/Carousel/Carousel'
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
      <Container>
        <Carousel />
        <Row>
          <Col xs={3}>
            <h4>Sort by:</h4>
            <Button
              color='primary'
              data-prop='name'
              data-order='asc'
              onClick={event => this.sort(event)}
            >
              Name: A to Z
            </Button>
            <Button
              data-prop='name'
              data-order='desc'
              onClick={event => this.sort(event)}
            >
              Name: Z to A
            </Button>
            <Button
              color='primary'
              data-prop='price'
              data-order='asc'
              onClick={event => this.sort(event)}
            >
              Price: low to high
            </Button>
            <Button
              data-prop='price'
              data-order='desc'
              onClick={event => this.sort(event)}
            >
              Price: high to low
            </Button>
          </Col>
          <Col xs={9}>
            <ProductsList sorted={this.state} />
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(Home)
