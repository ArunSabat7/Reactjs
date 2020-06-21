import React from 'react';
import BookContainer from './Comp/BookContainer'
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/store'
import HookBookContainer from './Comp/HookBookContainer'

function App() { 
  return (
    <Provider store={store} >
    <div className="App">
     <BookContainer/>
     <HookBookContainer/>
    </div>
    </Provider>
  );
}

export default App;
