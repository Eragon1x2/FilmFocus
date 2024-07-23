
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { FavoriteItemsContextProvider } from './store'
import RootPage from './pages/RootPage'
import FavoritePage from './pages/FavoritePage'
import FindMovie from './pages/FindMovie'
import FilmsPage from './pages/FilmsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage></RootPage>,
    errorElement: <p>Ты дибилоид</p>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: 'favorite',
        element: <FavoritePage></FavoritePage>
      },
      {
        path: 'movies',
        element: <FilmsPage></FilmsPage>
      },
      {
        path: 'movies/:movieId',
        element: <FindMovie></FindMovie>
      }
    ]
  }
])

function App() {
 return(
  <FavoriteItemsContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </FavoriteItemsContextProvider>
 )
}
export default App
{/* <li key={item.id}><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
        <p>{Number(item.vote_average.toFixed(2))}/10</p>
        <p>{item.release_date}</p>
        <h3>{item.original_title}</h3>
        <p>{item.overview}</p>
        </li> */}