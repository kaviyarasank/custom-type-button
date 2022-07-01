# Usage

import './App.css';
import { Button } from 'button-customs';

function App() {
  const handle = () => {
    alert("hello")
  }
  return (

    <div className="App">

      <Button

        onClick={handle}
        name='Button'
        height="40px"
        textAlign="center"
        border="none"
        transition=".5s ease-out"
        boxShadow="red 0px 1px 25px"
        color="#ffffff"
        background="red"
        width="300px"
        backgroundSize="200%"
        borderRadius="10px"
        fontSize="20px"
      />
    </div>
    
  );
}

export default App;
