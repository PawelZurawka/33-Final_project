import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from '../Button/Button'
import './ButtonBack.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class ButtonBack extends React.Component {
  render() {
    return (
      <Button className='btn__back' onClick={this.props.history.goBack}>
        <FontAwesomeIcon className='btn__back-icon' icon={faChevronLeft} />
        Back
      </Button>
    )
  }
}

export default withRouter(ButtonBack)
