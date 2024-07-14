import './App.css';
import Header from './Header'
import Category from './Category';
import Inputs from './Inputs';
import { useState } from 'react';
import Form from './Form';

function App() {
  const [showContact , setShotContact] = useState(false)
  function handleShowContact(){
    setShotContact(true)
  }

  function handleShowHome(){
    setShotContact(false)
  }

  


  return (
    <div>
        <Header handleShowContact={handleShowContact} handleShowHome={handleShowHome}></Header>
        {/* <Inputs></Inputs> */}
        {showContact ? <Form></Form> : <Category></Category>}
          
          
    </div>
      
  );
}



 





export default App;

