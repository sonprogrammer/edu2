
import { useRef } from 'react';
import './App.css';
import { Refcomponent, Todocomponent, Weathercomponent } from './component';

function App() {
  const topRef = useRef(null)

  const scrolltoTop = () => {
    if(topRef.current){
      topRef.current.scrollIntoView({ behavior: 'smooth'})
    }
  }
  return (
    <div >
        <Todocomponent/>
      <div ref={topRef}>
        <Weathercomponent />
      </div>
      <Refcomponent scrolltoTop={scrolltoTop}/>
    </div>
  );
}

export default App;
