import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";

function App() {

const  [dados, setDados] = useState([])
useEffect(()=>{
  fetch("http://10.26.44.20:3000")
  .then((resposta) => resposta.json())
  .then((result) =>{
    console.log(result);
  })
  .catch((erro)=>console.log(`erro ao carregar a API -> ${erro}`));
},[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
