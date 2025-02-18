

import { useState } from 'react';
import './App.css'

function App() {
  const [align, setAlign] = useState("left"); // 정렬 상태

  return (
    <>
      <div className="a">
        <span onClick={() => setAlign("left")}>왼쪽정렬</span>
        <span onClick={() => setAlign("center")}>중앙정렬</span>
        <span onClick={() => setAlign("right")}>오른쪽정렬</span>
      </div>
      <p className="b" style={{ textAlign: align }}>나는 최고입니다.</p>
    </>
  );
}

export default App
