import React from 'react'
import { bindActionCreators } from 'redux'
import { addToCart } from '../../actions/productsActions'
import { connect } from 'react-redux'

// Import styles
import './SingleProduct.scss'

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <img
              src={this.props.products[this.props.match.params.id].image}
              alt='product'
            />
          </div>

          <div>
            <p>{this.props.products[this.props.match.params.id].name}</p>
            <p>
              ${' '}
              {this.props.products[this.props.match.params.id].price.toFixed(2)}
            </p>
            <p>{this.props.products[this.props.match.params.id].description}</p>

            <button
              onClick={() =>
                this.props.addToCart(
                  this.props.products[this.props.match.params.id]
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
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
