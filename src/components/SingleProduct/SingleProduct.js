import React from 'react'
import { bindActionCreators } from 'redux'
import { addToCart } from '../../actions/productsActions'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from 'reactstrap'
import ButtonBack from '../common/ButtonBack/ButtonBack'
import Button from '../common/Button/Button'
import './SingleProduct.scss'

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Col className='single-product' md={12}>
          <Card>
            <Row>
              <Col md={6}>
                <ButtonBack />
                <Badge>
                  {this.props.products[this.props.match.params.id].tag}
                </Badge>
                <CardImg
                  src={this.props.products[this.props.match.params.id].image}
                  alt='product'
                ></CardImg>
              </Col>
              <Col md={6}>
                <CardBody>
                  <CardTitle>
                    {this.props.products[this.props.match.params.id].name}
                  </CardTitle>
                  <CardSubtitle>
                    ${' '}
                    {this.props.products[
                      this.props.match.params.id
                    ].price.toFixed(2)}
                  </CardSubtitle>
                  <CardText>
                    {
                      this.props.products[this.props.match.params.id]
                        .description
                    }
                    {
                      this.props.products[this.props.match.params.id]
                        .description
                    }
                  </CardText>
                </CardBody>
                <Button
                  variant='primary'
                  onClick={() =>
                    this.props.addToCart(
                      this.props.products[this.props.match.params.id]
                    )
                  }
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleProduct)
