import React from 'react'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  selectedItem: string
}

const Modal = ({ isOpen, closeModal, selectedItem }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className='absolute inset-0 text-black flex items-center justify-center bg-black bg-opacity-50 shadow-xl'
      onClick={closeModal} 
    >
      <div className='modal bg-white w-[90%] p-6 rounded-lg relative'
        onClick={e => e.stopPropagation()}
      >
          <h2 className='text-center mb-6'>{selectedItem} detail</h2>
          <button className='absolute right-6 top-6' onClick={closeModal}>X</button>
        <div className='modalInput flex flex-col'>
          <input type="number" placeholder='weight(KG)' /> 
          <input type="number" placeholder='amount' />
          <input type="type" placeholder='name(for your items)' />
          <button className='p-3'>submit</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
