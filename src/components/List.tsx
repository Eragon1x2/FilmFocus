import movie from '../types/movie'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import * as React from 'react';
interface Props {
    list: movie[] | null,
    fns: (item: movie) => void,
    what: boolean
}

function List(props: Props) {
    const {list, fns, what} = props;
    const navigate = useNavigate();
    function navigateTo(id: number) {
        navigate(`/movies/${id}`);
    }
    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement> , item:movie) {
        event.stopPropagation();
        fns(item)
    }
    return (
        <>
        <div className='movies-list'>
     {list && list.map((item: movie) => (
         <Card onClick={() => navigateTo(item.id)} key={item.id} className='movie-item' bg='dark'  text={'white'}>
         <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} width='300' height='500' />
         <Card.Body className='movie-item-body'>
          <p className='movie-rating'>{Math.floor(item.vote_average*10)}%</p>
           <Card.Title>{item.original_title}</Card.Title>
           <Card.Text className='movie-item-text'>
            {/* {item.overview.slice(0, 200)} ... */}
            {item.overview}
           </Card.Text>
         </Card.Body>
         <Card.Footer>         <Button variant="primary" onClick={(event) => handleButtonClick(event,item)}>{what === true ? 'Delete from Watch Later' : 'Add to Watch Later' }</Button></Card.Footer>
       </Card>
      ))}
     </div>
        </>
    )
}

export default List
