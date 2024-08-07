import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from '../api/work';
import movie from '../types/movie';
import { Button } from 'react-bootstrap';
import FavoriteItemsContext from '../store';


function FindMovie() {
    const { movieId } = useParams();
    const [data, setData] = useState<movie | null>(null);
    const contex = useContext(FavoriteItemsContext);
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1); // Возвращается на предыдущую страницу
    };
    useEffect(() => {
        getMovieById(Number(movieId))
        .then(datas => {setData(datas)})
    },[])

    function handleAddtoWAtchLater(item:movie) {
        contex.addItem(item);
    }
    return (
        <div className='box about_container'>
           <Button onClick={goBack} className='go_back'>Go back</Button>
     {
        data && <div className='about_box'>
               <img  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
               <div className='about_texts'>
                <h1>{data.original_title}</h1>
                <p className='about_rating'>{Math.floor(data.vote_average*10)}/10</p>
                <p className='about_overview'>{data.overview}</p>
                <a href={data.homepage} className='about_link' target="_blank">Link to homepage</a>
                <p className='about_genre_title'>Genres</p>
                <ul className='about_genres'>
                    {data.genres && data.genres.map(item => (
                        <li id={item.id}>{item.name}</li>
                    ))}
                </ul>
                <Button onClick={() => handleAddtoWAtchLater(data)}>Add to Favorite Movies</Button>
               </div>
        </div>
     }
        </div>
    )
}

export default FindMovie
