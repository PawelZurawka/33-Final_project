import React from 'react'
//import { ProductList } from '../../features/ProductList'
import { sort } from '../../../utils/Sort'
import { connect } from 'react-redux'

// Import styles
import './HomePage.scss'

class HomePage extends React.Component {
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
      <div>
        <div>
          <div>
            <p>Sort by:</p>
            <ul>
              <li
                data-prop='name'
                data-order='asc'
                onClick={event => this.sort(event)}
              >
                Name: A to Z
              </li>
              <li
                data-prop='name'
                data-order='desc'
                onClick={event => this.sort(event)}
              >
                Name: Z to A
              </li>
              <li
                data-prop='price'
                data-order='asc'
                onClick={event => this.sort(event)}
              >
                Price: low to high
              </li>
              <li
                data-prop='price'
                data-order='desc'
                onClick={event => this.sort(event)}
              >
                Price: high to low
              </li>
            </ul>
          </div>
        </div>
        {/* <ProductList sorted={this.state} /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(HomePage)
