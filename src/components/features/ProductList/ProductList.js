import React from 'react'
import { connect } from 'react-redux'
import { ProductSummary } from '../ProductSummary/ProductSummary'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

// Import styles
import './ProductList.scss'

export class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      currentProducts: [0, 6],
    }
    this.elements = this.props.sorted.products.length
    this.pageSize = 6
    this.pagesCount = Math.ceil(this.elements / this.pageSize)
  }

  handleClick(e, index) {
    e.preventDefault()
    this.setState({
      currentPage: index,
      currentProducts: [index * this.pageSize, (index + 1) * this.pageSize],
    })
  }

  render() {
    const { currentPage } = this.state
    return (
      <div>
        <div>
          {this.props.sorted.products
            .slice(this.state.currentProducts[0], this.state.currentProducts[1])
            .map((product, i) => {
              return (
                <ProductSummary
                  key={i}
                  index={i}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              )
            })}
        </div>
        <div>
          <Pagination className='pagination-main' aria-label='Page Navigation'>
            <PaginationItem disabled={currentPage <= 0}>
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href='#'
              />
            </PaginationItem>

            {[...Array(this.pagesCount)].map((page, i) => (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href='#'>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href='#'
              />
            </PaginationItem>
          </Pagination>
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

export default connect(mapStateToProps)(ProductList)
