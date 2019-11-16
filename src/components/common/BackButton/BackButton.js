import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from '../Button/Button'
import './BackButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class BackButton extends React.Component {
  render() {
    return (
      <Button
        color='info'
        className='btn__back'
        onClick={this.props.history.goBack}
      >
        <FontAwesomeIcon className='btn__back-icon' icon={faChevronLeft} />
        Back
      </Button>
    )
  }
}

export default withRouter(BackButton)
