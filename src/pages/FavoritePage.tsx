import { useContext } from 'react'
import List from '../components/List'
import FavoriteItemsContext from '../store'
import movie from '../types/movie';

function FavoritePage() {
    const contex = useContext(FavoriteItemsContext);
    function deleteFromFavoriteList(item: movie) {
        contex.deleteItem(item);
    }
    return (
        <div className='box'>
     <h1 className='favorite_title'>Watch Now</h1>
      {contex.items.length ?   <List list={contex.items} fns={deleteFromFavoriteList} what={true}></List> : <p className='favorite_text'>Add films first</p>}
        </div>
    )
}

export default FavoritePage
