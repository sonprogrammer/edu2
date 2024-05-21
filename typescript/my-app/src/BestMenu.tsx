import React from 'react'
import { Menu } from './model/restaurant'

interface OwnProps extends Omit<Menu, 'price'> {
    //*Menu타입에서 다른 객체를 추가할수있음
    showBestMenuName(name: string): string
}

//*type으로 할때는 아래처럼할수 잇음
// type OwnProps = Menu & {
//     showBestMenuName(name: string): string
// }


const BestMenu:React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default BestMenu
