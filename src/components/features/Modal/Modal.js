import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Button from '../../common/Button/Button'
import './Modal.scss'

const MyModal = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div className='cart-summary__modal'>
      <Button onClick={toggle}>Accept order</Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={'static'}
        centered={true}
      >
        <ModalHeader toggle={toggle}>Your order has been accepted.</ModalHeader>
        <ModalBody>Thank You and see You next time!</ModalBody>
        <ModalFooter>
          <a href='/' className='btn__close'>
            Close
          </a>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default MyModal
