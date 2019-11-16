import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import './Carousel.scss'

const items = [
  {
    src: '../../images/slide1.jpg',
    altText: 'Slide 1',
    caption: 'Nullam vehicula',
    header: 'Lorem ipsum',
    key: '1',
  },
  {
    src: '../../images/slide2.jpg',
    altText: 'Slide 2',
    caption: 'Sed nisi',
    header: 'Elementum eu facilisis',
    key: '2',
  },
  {
    src: '../../images/slide3.jpg',
    altText: 'Slide 3',
    caption: 'Amet nisl',
    header: 'Tincidunt nunc',
    key: '3',
  },
  {
    src: '../../images/slide4.jpg',
    altText: 'Slide 4',
    caption: 'Sed nisi',
    header: 'Elementum eu facilisis',
    key: '4',
  },
]

const Carousel = () => <UncontrolledCarousel items={items} />

export default Carousel
