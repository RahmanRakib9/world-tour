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
        <button id='infoBtn'>More About </button>
        `
        parentDiv.innerHTML = parentDivInfo;
        grandParent.appendChild(parentDiv);
    });
}