import { useContext, useEffect, useState } from "react"
import { getAllGenres, getMoviesByGenre, getPlayingNow } from "../api/work"
import { Dropdown } from "react-bootstrap"
import genre from "../types/movie"
import List from "../components/List"
import FavoriteItemsContext from "../store"
import movie from '../types/movie';

function FilmsPage() {
    const [genresss, setGenres] = useState<genre[] | []>([])
    const [films, setFilms] = useState([]);
    const [genre, setGenre] = useState('all');
    const context = useContext(FavoriteItemsContext);
    useEffect(() => {
    getAllGenres()
    .then(data => setGenres(data.genres))
    },[])
    useEffect(() => {
    if(genre === 'all') {
      getPlayingNow()
      .then(data => setFilms(data.results))
    }
    else {
      getMoviesByGenre(genre)
      .then(data => setFilms(data.results))
    }
    },[genre])
    function addItemToFavorite(item: movie) {
      context.addItem(item)
    }
    return (
        <div className="box films_page">
         <Dropdown className="films_page_dropdown">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div onClick={() => setGenre('all')}>All</div>
      {Array.isArray(genresss) ? (
                genresss.map((genre) => (
                    <div key={genre.id} onClick={() => setGenre(genre.id)}>{genre.name}</div>
                ))
            ) : (
                <p>No genres available</p>
            )}
      </Dropdown.Menu>
    </Dropdown>
            <List list={films} fns={addItemToFavorite} what={false}></List>
        </div>
    )
}

export default FilmsPage
