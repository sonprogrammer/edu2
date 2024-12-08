import  { useEffect, useState } from 'react'
import { ChapterComponent } from '../../components'
import { Section } from '../../types'
import { StyledText } from './style'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    const [myItems, setMyItems] = useState<Section[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const savedItems = localStorage.getItem('myItem')
        if(savedItems) {
            setMyItems(JSON.parse(savedItems))
        }
    },[])
    

    const handleClick = (item: Section) => {
      navigate(`/detail/${item.id}`)
  }


    
  return (
    <div className='p-5 h-full'>
      {myItems.length > 0 ? (

        <ChapterComponent data={myItems} onButtonClick={handleClick} isMyPage={true} /> 
      ): (
        <StyledText>
          go get my info!
        </StyledText>
      )}
    </div>
  )
}

export default MyPage
