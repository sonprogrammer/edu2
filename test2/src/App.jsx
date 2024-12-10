
import { useRef, useState } from 'react';
import './App.css';
import { Moviecomponent, Refcomponent, Testcomponent, Timercomponent, Todocomponent, Weathercomponent } from './component';
import { Mbticomponent } from './component/Mbticomponent';


function App() {
  const topRef = useRef(null)
  const bottomRef = useRef(null)

  //ex
  const countRef = useRef(0)
  const [renderCount, setRenderCount] = useState(0)

  const handleClick = () => {
    countRef.current += 1;
    setRenderCount(renderCount + 1)
  }
  

  const scrolltoTop = () => {
    if(topRef.current){
      topRef.current.scrollIntoView({ behavior: 'smooth'})
    }
  }

  const scrollToBottom = () => {
    if(bottomRef.current){
      bottomRef.current.scrollIntoView({ behavior: 'smooth'})
    }
  }
  return (
    <div >
      <div ref={topRef}>
        <Todocomponent scrollToBottom={scrollToBottom}/>
      </div>
        <Weathercomponent />
      <Refcomponent scrolltoTop={scrolltoTop}/>
        <Moviecomponent />
        <Timercomponent />
      <div ref={bottomRef}>
        <Mbticomponent />
      </div>
      <Testcomponent />

    {/* ex */}
    <div>
      <p>Count ref : {countRef.current}</p>
      <p>render count : {renderCount}</p>
      <button onClick={handleClick}>click</button>
    </div>

      
    </div>
  );
}

export default App;
