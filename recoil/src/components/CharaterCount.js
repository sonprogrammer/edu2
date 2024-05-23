import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../App'

const CharaterCount = () => {

    const count = useRecoilValue(charCountState)
  return (
    <div>
      CharaterCount : {count}
    </div>
  )
}

export default CharaterCount
