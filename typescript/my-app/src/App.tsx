import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant'
import BestMenu from './BestMenu';



let data: Restaurant = {
  name: 'my-app',
  category: 'my-category',
  address: {
    city: 'cheonan',
    detail: 'somewhere',
    zipCode: 32432
  },
  menu: [{name: 'rose pasta', price: 2000, category: "pasta"},{name: 'rose steak', price: 5000, category: "steak"}]
}

const App:React.FC = () =>{
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)

  const changeAddress = (address: Address) => {
    setMyRestaurant({...myRestaurant, address: address})
  }

  const showBestMenuName = (name: string) => {
    return name
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name='불고기 피자' category='피자'  showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
