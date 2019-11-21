import React from 'react'
import { CardText, Card, CardLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from '../../../src/components/common/PageTitle/PageTitle'
import {
  faFacebookF,
  faTwitter,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import Footer from '../Footer/Footer'
import './Contact.scss'

const ContactPage = () => {
  return (
    <>
      <Card className='contact'>
        <PageTitle>Contact</PageTitle>
        <CardText>
          <b>Outdoor Shop Ltd.</b>
        </CardText>
        <CardText>
          <b>Address:</b> 121 King Street, Melbourne Victoria 3000 Australia
        </CardText>
        <CardText>
          <b>E-mail:</b>{' '}
          <CardLink
            href='mailto:outdoor-shop@outdoor.com'
            className='email-address'
          >
            outdoor-shop@outdoor.com
          </CardLink>
        </CardText>
        <CardText>
          <b>Phone Number:</b> <a href='tel:+54585256758'> +54 585 256 758</a>
        </CardText>
        <CardText className='contact__icons-wrapper'>
          <a
            href='https://www.facebook.com'
            rel='noopener noreferrer'
            target='_blank'
            className='contact__facebook contact__icon'
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href='https://www.twitter.com'
            rel='noopener noreferrer'
            target='_blank'
            className='contact__twitter contact__icon'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href='https://www.pinterest.com'
            rel='noopener noreferrer'
            target='_blank'
            className='contact__pinterest contact__icon'
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </CardText>
      </Card>
      <Footer />
    </>
  )
}

export default ContactPage
