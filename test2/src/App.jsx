
import { useRef } from 'react';
import './App.css';
import { Moviecomponent, Refcomponent, Timercomponent, Todocomponent, Weathercomponent } from './component';
import { Mbticomponent } from './component/Mbticomponent';


function App() {
  const topRef = useRef(null)
  const bottomRef = useRef(null)

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
    </div>
  );
}

export default App;
