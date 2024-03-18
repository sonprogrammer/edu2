import Image from "next/image"


export default function List() {
  const items = ['tomato', 'pasta', 'coconuts']
  return (
    <div>
      {items.map((item, i) => (
        <div className='food' key={i}>
          <h4>{item} $30 </h4>
          <img  className='food-img' src={`https://codingapple.com/wp-content/uploads/2023/01/food${i}.png`} alt={item} />
        </div>
      ))}
    </div>
  )
}
