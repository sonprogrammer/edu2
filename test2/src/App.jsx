
import { useRef } from 'react';
import './App.css';
import { Moviecomponent, Refcomponent, Todocomponent, Weathercomponent } from './component';

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
      <Moviecomponent />
    </div>
  );
}

export default App;
