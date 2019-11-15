import React from 'react'
import { CardText, Card, CardLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from '../../../src/components/common/PageTitle/PageTitle'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import './Contact.scss'
//import Footer from '../../features/Footer/Footer';

const ContactPage = () => {
  return (
    <Card className='contact'>
      <PageTitle>Contact</PageTitle>
      <CardText>Outdoor Shop Ltd.</CardText>
      <CardText>
        Address: 121 King Street, Melbourne Victoria 3000 Australia
      </CardText>
      <CardText>
        E-mail:{' '}
        <CardLink
          href='mailto:outdoor-shop@outdoor.com'
          className='email-address'
        >
          outdoor-shop@outdoor.com
        </CardLink>
      </CardText>
      <CardText>
        Phone Number: <a href='tel:+54585256758'> +54 585 256 758</a>
      </CardText>
      <CardText>
        <a href='facebook.com' className='contact__facebook contact__icon'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='instagram.com' className='contact__instagram contact__icon'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='twitter.com' className='contact__twitter contact__icon'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='pinterest.com' className='contact__pinterest contact__icon'>
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </CardText>
    </Card>
  )
}

export default ContactPage
