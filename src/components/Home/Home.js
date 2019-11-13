import React from 'react'
import { ProductsList } from '../ProductsList/ProductsList'
import { sort } from '../../utils/sort'
import { connect } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'
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
        <Container className='sort'>
          <h4>Sort by:</h4>
          <Row>
            <Col>
              <Button
                color='link'
                data-prop='name'
                data-order='asc'
                onClick={event => this.sort(event)}
              >
                Name: A to Z
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                color='link'
                data-prop='name'
                data-order='desc'
                onClick={event => this.sort(event)}
              >
                Name: Z to A
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                color='link'
                data-prop='price'
                data-order='asc'
                onClick={event => this.sort(event)}
              >
                Price: low to high
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                color='link'
                data-prop='price'
                data-order='desc'
                onClick={event => this.sort(event)}
              >
                Price: high to low
              </Button>
            </Col>
          </Row>
        </Container>
        <ProductsList sorted={this.state} />
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
