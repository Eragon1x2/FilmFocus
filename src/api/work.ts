const apiKey = '958dba82a40f1f09fd40d28de4a29ee9';

function getPlayingNow() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => data);
}
function getMovieById(id: number) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => data);
}
function getMoviesByGenre(genre: string | number) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`)
    .then(response => response.json())
    .then(data => data)
}
function getAllGenres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(response =>  response.json())
    .then(data => data)
}
export {getPlayingNow, getMovieById, getMoviesByGenre, getAllGenres};
