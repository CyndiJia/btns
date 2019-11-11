import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

let btns = [
  {
    id: "b1",
    name: "First Button"
  },
  {
    id:"b2",
    name: "Second Button"
  },
  {
    id:"b3",
    name: "Third Button"
  }
]


function App() {
  return (
    <div className="App">
      <Whole data={btns}/>
    </div>
  );
}

function Whole({data}){
  const[select,changeSelection] = useState('');
  return(
    <div className="main">
      <div className="con">
        {data.map(d=>{return <Button name = {d.name} id = {d.id} onchange={changeSelection} selected={select}/>})}
      </div>
      <div className="blank">
        <p id="text">You have selected : {select}</p>
      </div>
    </div>
   
  );
}

function Button({name,id,selected,onchange}){
  const[nofill,changeFill] = useState(false);
  
  function changeContent(){
    changeFill(true);
    onchange(name);
    setTimeout(back,5000);
 }
  function back(){
    changeFill(false);
 }
 console.log({selected});
    return(
    <div className="three">
      <div className = {'b'+" "+(nofill?'fill':'')} id={id} onClick={changeContent}>
        <p id ={nofill?'textclr':''}>{name}</p>
      </div>
    </div>
 
    );
    
}

export default App;
