import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './ButtonBack.scss'

class ButtonBack extends React.Component {
  render() {
    return (
      <button
        className='btn-back'
        variant='danger'
        onClick={this.props.history.goBack}
      >
        <FontAwesomeIcon className='btn-back__icon' icon={faChevronLeft} />
        Back
      </button>
    )
  }
}

export default withRouter(ButtonBack)
