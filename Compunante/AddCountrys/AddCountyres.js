import React from 'react';

const AddCountyres = (props) => {
    const newCount=props.selectCountry;
    // let totalPopulation=0;
    // for (let i = 0; i < newCount.length; i++) {
    //     const country = newCount[i];
    //     totalPopulation=totalPopulation+country.population
    // }
    const totalPopulation= newCount.reduce((sum, country)=>sum+country.population,0)
    return (
        <div>
            <h4>This is Card:{newCount.length}</h4>
            <p>Total Population:{totalPopulation}</p>
        </div>
    );
};

export default AddCountyres;