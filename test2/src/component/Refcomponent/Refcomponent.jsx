import React, { useRef, useState } from 'react'

const Refcomponent = ({scrolltoTop}) => {
    const [stateCount, setstateCount] = useState(0);
    const refCount = useRef(0);
    //*useRef가주는 훅은 객체이다 그 안에 current라는 키가 있다


    const [inputValue, setInputValue] = useState('')
    const inputEl = useRef('');

    const handleSearch = () => {
        if(inputEl.current !== inputValue && inputValue){
            fetch()
            inputEl.current = inputValue
        }
    }
    
    const inputE = useRef(null)

    
    
    let count = 0;
    return (

        <div className='h-screen bg-sky-300 flex flex-col justify-center text-xl font-bold relative'>
            <div>state : {stateCount}</div>
            <div>변수 : {count}</div>
            <div>ref : {refCount.current}</div>
            <button onClick={() => setstateCount((prev) => prev + 1)}>
                state up
            </button>
            <button onClick={() => {
                count++
            }}>
                변수 up
            </button>
            <button onClick={() => {
                refCount.current++
            }}>
                ref up
            </button>
            <br/>

            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={handleSearch}>검색</button>

            <br />
            <input type="text" ref={inputE}/>
            <button onClick={() => inputE.current.focus()}>검색</button>
            
            <button className='absolute bottom-2 right-2' onClick={scrolltoTop}>go up</button>

        </div>
    );
}

export default Refcomponent
