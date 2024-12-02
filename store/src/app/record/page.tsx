'use client'

import ExtendModal from '@/components/ExtendModal'
import { recordData } from '@/mockupData/recordData'
import React, { useState } from 'react'



const page = () => {
  const [isOpenModal, setIsOpenModal] = useState<number | null>(null)

  const openModal = (id: number) => {
    setIsOpenModal(id)
  }

  const closeModal = () => {
    setIsOpenModal(null)
  }

  return (

      <div className='p-3'>

          {recordData.map((record, i) => (
            <div className='recordBox' key={record.id}>
              
              <img src={record.imgSrc} alt="img" />
              <div className='recordDetail'>
                <div className='text'>
                  <p>픽업 날짜</p>
                  <p>{record.pickupDate}</p>
                </div>
                <div className='text'>
                  <p>수량</p>
                  <p>{record.quantity}</p>
                </div>
                <button className='btn' onClick={() => openModal(record.id)}>연장하기</button>
                {isOpenModal === record.id && <ExtendModal isCloseModal={closeModal} />}

              </div>
            </div>
          ))}

        </div>
  )
}

export default page
