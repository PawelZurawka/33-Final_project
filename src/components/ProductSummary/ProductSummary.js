import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProductSummary.scss'

export const ProductSummary = props => (
  <NavLink
    className='product col-sm-12 col-md-6 col-lg-4'
    exact
    to={'/product/' + props.index}
    index={props.index}
  >
    <p className='product-info'>{props.productInfo}</p>
    <p className='product-name'>{props.name}</p>
    <p className='product-price'>$ {props.price.toFixed(2)}</p>
    <img className='product-image' src={props.image} alt='product' />
  </NavLink>
)
