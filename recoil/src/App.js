import {  atom, selector, useRecoilState } from 'recoil';
import './App.css';
import CharaterCount from './components/CharaterCount';
import TextInput from './components/TextInput';

export const textState = atom({
  key: 'textState',
  default: '',
})

export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const test = get(textState)
    return test.length
  }
})

function App() {
  const [text, setText] = useRecoilState(textState)
  return (
    <div>
      <TextInput />
      <CharaterCount />
    </div>
  );
}

export default App;
