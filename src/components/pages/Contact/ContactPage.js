import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactPage.scss'
//import { Card, CardText, Row, Col } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

// <div>
//   <PageTitle>Contact</PageTitle>
//   <Row>
//     <Col sm='6'>
//       <Card body>
//         <CardText>Your Favourite Outdoor Shop Ltd.</CardText>
//         <CardText>9432 Division Street</CardText>
//         <CardText>Stone Mountain, GA 30083</CardText>
//         <CardText>Mobile Number: 207-914-3411</CardText>
//       </Card>
//     </Col>
//   </Row>
// </div>

const ContactPage = () => (
  <div className='contact'>
    <h1 className='contact__header'>Contact us:</h1>
    <p className='contact__address'>
      Address: 121 King Street, Melbourne Victoria 3000 Australia
    </p>
    <p className='contact__email'>
      Email:
      <a href='mailto:outdoor-shop@outdoor.com' className='email-address'>
        outdoor-shop@outdoor.com
      </a>
    </p>
    <p className='contact__phone'>
      Mobile:
      <a href='tel:+54585256758'> +54 585 256 758</a>
    </p>
    <h2 className='contact__social-media-header'>Social media</h2>
    <div className='contact__social-media-wrapper'>
      <a href='facebook.com' className='contact__facebook contact__icon'>
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
      <a href='instagram.com' className='contact__instagram contact__icon'>
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
      <a href='twitter.com' className='contact__twitter contact__icon'>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a href='pinterest.com' className='contact__pinterest contact__icon'>
        <FontAwesomeIcon icon={['fab', 'pinterest']} />
      </a>
    </div>
  </div>
)

export default ContactPage
