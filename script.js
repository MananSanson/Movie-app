const API_URL= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7b03a91b3933aceb29bc44aedf3e2073&page=1"
const IMG_PATH= "https://image.tmdb.org/t/p/w500"
const SEARCH_URL= "https://api.themoviedb.org/3/discover/movie?api_key=7b03a91b3933aceb29bc44aedf3e2073&query='"

//get initial movies
async function getMovies(API_URL){

    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}
