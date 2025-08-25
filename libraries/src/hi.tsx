import React, { useCallback, useEffect, useMemo, useState } from 'react'

const hi = () => {

    const [started, setStarted ] = useState(false)
    const [time, setTime] = useState(0)


    useEffect(() => {
        if(started){
            setInterval(() => {
                setTime(prev => prev+1)
            }, 1000);
        }
    },[started])

    


  return (
    <div>
      
    </div>
  )
}

export default hi
