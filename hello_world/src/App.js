import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">

    <EventBind/>
    {/* <ClassClick/> */}
    {/* <FunctionClick/> */}
    {/* <Counter/>
     <Message/>
    <Greet name="Anujna" age="22">
      <p>This is to have props unknown</p>
    </Greet>
    <Greet name="Anjali" age="26">
      <button>Save</button>
    </Greet>
    <Greet name="Muskan" age="22"/>

    <Welcome name="Mangala" age="31"/>

    <Welcome name="Poornima" age="26"/> */}
    <Hello /> 
    </div>
  );
}

export default App;
