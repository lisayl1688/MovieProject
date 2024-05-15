import movies from './filmlist'

const searchField = document.getElementById('search-field') as HTMLInputElement;
const searchButton = document.getElementById('search-bttn');
const yearUp = document.getElementById('year-up');
const yearDown = document.getElementById('year-down');
const bestRate = document.getElementById('best-rate');
const wrapper = document.getElementById('wrapper') ?? new HTMLElement();



function searchInMovies(){
    wrapper.innerHTML = '';
    let filterByInputArray = [];
    filterByInputArray = movies.filter((movie:any) => movie[0].toLowerCase().includes(searchField.value.toLowerCase()) || movie[1].toLowerCase().includes(searchField.value.toLowerCase()) || movie[2].toLowerCase().includes(searchField.value.toLowerCase()));
    
    arrayForEach(filterByInputArray);
}

searchButton?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    searchInMovies();
});

function yearUpFunction(){
    wrapper.innerHTML = '';
    let sortedUpArray = [];
    sortedUpArray = movies.sort((a:any, b:any) => a[1] - b[1]);
    
    arrayForEach(sortedUpArray);
}
if(yearUp) {
yearUp.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    yearUpFunction();
});
}

function yearDownFunction() {
    wrapper.innerHTML = '';
    let sortedDownArray = [];
    sortedDownArray = movies.sort((a:any, b:any) => b[1] - a[1]);
    
    arrayForEach(sortedDownArray);
}
if(yearDown) {
yearDown.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    yearDownFunction();
});
}
function bestRateFunction() {
    wrapper.innerHTML = '';
    let bestRateArray = [];
    bestRateArray = movies.sort((a:any, b:any) => b[5] - a[5]);
    
    arrayForEach(bestRateArray)
}
if(bestRate) {
bestRate.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    bestRateFunction();
});
}

function arrayForEach(array:any) {
    array.forEach((movie:any) => {
        const divFuerFilms = document.createElement('div');
        const filmTitle = document.createElement('h2');
        const filmYear = document.createElement('p');
        const filmDirector = document.createElement('h3');
        const filmLength = document.createElement('p')
        const filmGenre = document.createElement('p');
        const filmRate = document.createElement('p');
        
        filmTitle.innerText = movie[0];
        filmYear.innerText = movie[1];
        filmDirector.innerText = movie[2];
        filmLength.innerText = movie[3];
        filmGenre.innerText = movie[4];
        filmRate.innerText = movie[5];
        
        wrapper.appendChild(divFuerFilms);
        divFuerFilms.appendChild(filmTitle);
        divFuerFilms.appendChild(filmYear);
        divFuerFilms.appendChild(filmDirector);
        divFuerFilms.appendChild(filmLength);
        divFuerFilms.appendChild(filmGenre);
        divFuerFilms.appendChild(filmRate);
    });
}



