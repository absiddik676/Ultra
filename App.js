import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Country from './Compunante/Country/Country';
import AddCountyres from './Compunante/AddCountrys/AddCountyres';

function App() {
  const[countries, setCountries]=useState([]);
  const [selectCountry, setCountry]=useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    
  },)
    const  handelAddcountry=(country)=>{
      const neeCounty=[...selectCountry,country]
      setCountry(neeCounty)
     
    } 
  
  return (
    <div className="App">
      <h1>countries:{countries.length}</h1>
      <h3>countrys:{selectCountry.length}</h3>
      <AddCountyres selectCountry={selectCountry}></AddCountyres>
        {
        countries.map(coun=><Country country={coun} handelAddcountry={handelAddcountry} ></Country>)
        }
        
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
