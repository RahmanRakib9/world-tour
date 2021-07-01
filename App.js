// loadData from http://restcountries.eu/
async function loadData() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json();
    displayCountries(data);

}
loadData();


// display all countries on ui
const displayCountries = countries => {
    countries.forEach(country => {
        const grandParent = document.getElementById('grandParent');
        const parentDiv = document.createElement('div');
        parentDiv.className = 'parentDiv'
        const parentDivInfo = `
        <h1>${country.name} </h1>
        <img src='${country.flag}' id='countryFlag'/></br>
        <button id='infoBtn' onClick="displayCountryInfo('${country.callingCodes}')">More About </button>
        `
        parentDiv.innerHTML = parentDivInfo;
        grandParent.appendChild(parentDiv);
    });
}


// loadData according to country callingCodes
async function displayCountryInfo(callingCodes) {
    const res = await fetch(`https://restcountries.eu/rest/v2/callingcode/${callingCodes}`)
    const data = await res.json();
    handleCountryInfo(data[0]);

}


//display country details 
const handleCountryInfo = info => {
    const countryDetails = document.getElementById('countryDetails')
    const countryDetailsInfo = `
    <img src='${info.flag}'/>
    <h2> ${info.name}</h2>
    <h3>capital: ${info.capital} </h3>
    <h4>region: ${info.region} </h4>
    <h5>population: ${info.population} </h5>
    `
    countryDetails.innerHTML = countryDetailsInfo

}