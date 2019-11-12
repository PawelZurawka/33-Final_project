import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProductSummary.scss'

export const Product = props => (
  <NavLink exact to={'/product/' + props.index} index={props.index}>
    <p>{props.productInfo}</p>
    <p>{props.name}</p>
    <p>$ {props.price.toFixed(2)}</p>
    <img src={props.image} alt='product' />
  </NavLink>
)
