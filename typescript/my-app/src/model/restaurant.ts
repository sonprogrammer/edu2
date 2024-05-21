import { Restaurant } from './../../model/restaurant';
export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu:Menu[]
}

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
}

export type Menu = {
  name: string;
  price: Number;
  category: string;
}

//*타입에서 어느것을 빼서 사용할 수 있는 기능,
//*그건 타입에서 어느 것을 삭제 하고 싶을 때 Omit안에 어떤 타입에서 뭘 빼고 싶은지 적으면된다 
export type AddressWithoutZip = Omit<Address, 'zipcode'>


//*타입에서 하나만가져오고 싶을때
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>


export type ApiResponse<T> ={ //*T는 어떤 타입이 들어올지 모를 때 제네릭을 쓰면 좋다
  data:T[],
  totalPage:number,
  page:number
}
//*위처럼 제네릭으로 T를 지정해주면 아래처럼 그 타입을 넣어주면 오류 없이 작동한다 
export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>