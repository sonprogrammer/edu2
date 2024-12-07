import React, { useEffect, useState } from 'react'
import { ChapterComponent } from '../../components'

const MyPage = () => {
    const [myItems, setMyItems] = useState<any[]>([])

    useEffect(() => {
        const savedItems = localStorage.getItem('myItem')
        if(savedItems) {
            setMyItems(JSON.parse(savedItems))
        }
    },[])
    

    const handleClick = () => {

    }


    
  return (
    <div className='p-5'>
        <ChapterComponent data={myItems} onButtonClick={handleClick} isMypage={true} /> 
    </div>
  )
}

export default MyPage
