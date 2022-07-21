import React from 'react';

const Country = (props) => {
    
    const countryStyal={
        border:'5px solid red',
        margin:'7px',
        width:'400px',
        padding:'5px',
        height:'300px'
    }
    const lfageStayal={
        width:'70px'
    }
    //const {name,population,region}=props.country; [eivabeo kora jay jokhon object er
           // modde name=name eivabe thakbe but jokhon object er  modde aro object thakbe tokhon hobe na ]
           const handelAddcountry=props.handelAddcountry
    return (
        <div style={countryStyal}>
            <h1>Name:{props.country.name.common}</h1>
            <img style={lfageStayal} src={props.country.flags.png} alt="" />
            <p>Population:{props.country.population}</p>
            <p>Region:{props.country.region}</p>
            <button onClick={()=>handelAddcountry(props.country)}>Add Country </button>
        </div>
    );
};

export default Country;