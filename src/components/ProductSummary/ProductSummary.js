import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProductSummary.scss'

export const ProductSummary = props => (
  <NavLink
    className='product'
    exact
    to={'/product/' + props.index}
    index={props.index}
  >
    <p className='produc__info'>{props.productInfo}</p>
    <p className='product__name'>{props.name}</p>
    <p className='product__price'>$ {props.price.toFixed(2)}</p>
    <img className='product__image' src={props.image} alt='product' />
  </NavLink>
)
