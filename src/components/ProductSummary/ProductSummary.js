import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardImg, CardTitle, CardSubtitle, Badge } from 'reactstrap'
import './ProductSummary.scss'

export const ProductSummary = props => (
  <Col className='product-summary' md={5}>
    <Link to={'/product/' + props.index} index={props.index}>
      <Card>
        <Badge>{props.tag}</Badge>
        <CardImg src={props.image} alt='product' />
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>$ {props.price.toFixed(2)}</CardSubtitle>
      </Card>
    </Link>
  </Col>
)
