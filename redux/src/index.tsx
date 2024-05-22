import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import counter from './reducers';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer)


console.log('store.getstate()', store.getState())
const render = ()  => root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App 
      value={store.getState()}
      onIncrement={() => store.dispatch({type: "INCREMENT"})}
      onDecrement={() => store.dispatch({type: "DECREMENT"})}
    />
    </Provider>
  </React.StrictMode>
);

render()

store.subscribe(render)

reportWebVitals();
