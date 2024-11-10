import React from 'react'
import { useEffect,useState } from 'react'

const Timercomponent = () => {
    const [remainingTime, setRemainingTime] = useState(3)

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime < 1) {
                  clearInterval(timer); 
                  // alert('timeout');
                  return 0;
                }
                return prevTime - 1;
              });
        },1000)
        return () => clearInterval(timer);

    },[remainingTime])


    const formatTime = (seconds) => {
        const date = new Date(seconds * 1000)
        return date.toISOString().substr(11, 8)
    }
    
    
  return (
    <div className='flex h-screen bg-violet-950 justify-center items-center'>
      <div className='border h-1/2 w-[50%] '>
            <h1 className='text-2xl font-bold text-white p-3 w-full text-center py-5 border-b-2 border-pink-700'>alram</h1>
            <div className='flex items-center'>
                <h1 className='text-white p-5 '>인증번호 유효 시간 : </h1>
                <h1 className='text-red-500'>{formatTime(remainingTime)}</h1>
            </div>
            <button
                onClick={() => setRemainingTime(3)}
             className='bg-black p-3 text-white rounded-xl ml-5'>재전송</button>
      </div>
    </div>
  )
}

export default Timercomponent
