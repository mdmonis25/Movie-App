import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    // runs every render id dependecny not added otherwise runs initially
    setCounter(100)
  },[])
  return (
    <div className="App">
      <button onClick={()=> setCounter((prevCount)=> prevCount+1 )}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount-1 )}>-</button>
    </div>
  );
}

export default App;
