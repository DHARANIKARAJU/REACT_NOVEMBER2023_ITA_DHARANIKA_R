import './App.css';
import StateProps from './components/StateProps';
import Props from "./components/Props";
import {useState} from "react";
function App() {
  const[name,setName]=useState("Props : Dharanika");
  return(
    <div className="App">
      <Props username={name}/>
      <StateProps/>

    </div>
  );
}

export default App;
