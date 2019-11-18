import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Button from '../../common/Button/Button'

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
        centered={true}
      >
        <ModalHeader toggle={toggle}>Your order has been accepted.</ModalHeader>
        <ModalBody>See you next time!</ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default MyModal
