'use client'

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css' 

interface recordProps{
    isCloseModal: () => void;
  }

const ExtendModal = ({isCloseModal} : recordProps) => {
    const [date, setDate] = useState<Date | null>(null)


    const handleDateChange = (newDate: Date | null) => {
        setDate(newDate)
    }
    
    
  return (
    <div className='absolute bg-black bg-opacity-50 w-full inset-0 flex justify-center items-center'
        onClick={isCloseModal}
    >
        <div className='bg-white w-[90%] rounded-lg text-black p-6 relative'
            onClick={e => e.stopPropagation()}
        >
            <h2 className='text-center'>Do you want to extend?</h2>
            <button className='absolute right-6 top-6'
                onClick={isCloseModal}
            >X</button>

            <div className='mt-6'>
            <Calendar
                onChange={handleDateChange}
                value={date} 
            />
            </div>
            
        </div>
    </div>
  )
}

export default ExtendModal
