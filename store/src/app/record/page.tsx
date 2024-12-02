'use client'

import ExtendModal from '@/components/ExtendModal'
import React, { useState } from 'react'



const page = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <div className='p-3'>
        <div className='recordBox'>
          <img src="./cl.jpeg" alt="옷" />
          <div className='recordDetail'>
            <p>픽업 날짜</p>
            <p>수량</p>
            <button onClick={openModal}>연장하기</button>
            {isOpenModal && <ExtendModal isCloseModal={closeModal} />}

          </div>
        </div>
        
      </div>
    </>
  )
}

export default page
