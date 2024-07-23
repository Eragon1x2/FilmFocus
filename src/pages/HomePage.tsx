import { useContext, useEffect, useState } from 'react'
import FavoriteItemsContext from '../store';
import garfield from '../assets/garfield.jpeg';
import despicable from '../assets/despicable.png';
import inside from '../assets/inside.png';
import {getPlayingNow} from '../api/work';
import movie from '../types/movie';
import CarouselComponent from '../components/Carousel_component';
import List from '../components/List';
const slider = [
  {
    image: garfield,
    name: 'The Garfield Movie',
    vote : 7.26,
    id: 1,
  },
  {
    image: despicable,
    name: 'Despicable Me 4',
    vote : 7.45,
    id: 2,
  },
  {
    image: inside,
    name: 'Inside Out 2',
    vote : 7.70,
    id: 3,
  }
]

function HomePage() {
    const [data, setData] = useState<movie[] | null>(null);
  const context = useContext(FavoriteItemsContext);
  useEffect(() => {
   getPlayingNow()
   .then(data => {setData(data.results)})
  },[])
  function addItemToFavorite(item: movie) {
    context.addItem(item)
  }
  return (
    <>
    <CarouselComponent slider={slider}></CarouselComponent>
    <div className="box">
    <h1 className='title'>Watching Now</h1>
    <List list={data} fns={addItemToFavorite} what={false}></List>
    </div>
    </>
  )
}

export default HomePage
