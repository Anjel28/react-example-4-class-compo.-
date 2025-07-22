import React from 'react';
import './App.css';
import Customer from './components/Customer'
import Users from './components/Users'

function App() {
  
  return (
  <div className = "container">
   <div className="row">
    <div className="col-md-6">

     <Customer  text="typescript" onClick={() => console.log('button clicked')} /*text="Click me" 
  onClick={() => console.log('Button clicked')}*/ />
  
    </div>
    <div className="col-md-6">
    <Users   userid = {1} username="admin"/>
    </div>

   </div>
  
  
  
         
       
      
  </div>
  );
}

export default App;
