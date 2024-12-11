import React, { useRef, useState } from 'react'

const Test = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const [countThree, setCountThree] = useState(0)
    const ref = useRef(0)
    const rednderCount = useRef(0)

    

    const handleClickOne = () => {
        setCountOne(countOne+1)
    }
    const handleClickTwo = () => {
        setCountTwo(countTwo+1)
    }
    const handleClickThree = () => {
        setCountThree(countThree+1)
    }

    const handleClickRef = () => {
        ref.current += 1
    }

    rednderCount.current += 1
    

  return (
    <div>
        <p>{countOne}</p><button onClick={handleClickOne}>buttonOne</button>
        <p>{countTwo}</p><button onClick={handleClickTwo}>buttonOne</button>
        <p>{countThree}</p><button onClick={handleClickThree}>buttonOne</button>
        {/* <p>{ref}</p><button onClick={handleClickRef}>buttonOne</button> */}
        {/* <p>renderCount</p>
        <p>{rednderCount.current}</p> */}
        <p>{rednderCount.current}</p><button
            onClick={() => rednderCount.current++}
        >rednerUp</button>
    </div>
  )
}

export default Test



// import React, { useState, useRef } from "react";

// const Test = () => {
// const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   renderCount.current += 1; // 렌더링 횟수를 저장

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Component rendered: {renderCount.current} times</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Test;