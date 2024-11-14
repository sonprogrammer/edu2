import age from './data'

export default function Cart() {
    let bags=  ['tomato', 'pasta']
    let colors = ['red', 'blue']
    return (
      <div>
        <h4 className="title">Cart</h4>
        {age}
        <CartItem hi={bags}/>
        <Btn colors={colors}/>
      </div>
    )
  } 

  function Btn({colors}) {
    return(
        <div>
            <button style={{color: colors[1]}}>button</button>
        </div>
    )
  }

  function CartItem({hi}) {
    return(
        <div className="cart-item">
          <p>{hi[1]}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
  }