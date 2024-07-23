import { Container, Navbar } from 'react-bootstrap'
import {NavLink, Outlet} from 'react-router-dom'
import movie from '../../public/movie.svg';
import films from '../../public/films.svg';
import favorite from '../../public/favorite.svg';

function RootPage() {
    return (
        <>
       <div className="wrapper">

       <div className='box'>
       <Navbar expand="lg" className='nav'>
       <NavLink to='/'
     className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
          ? "pending"
          : "default"
      }
       ><img src={movie} width='40' alt="" style={{marginRight: '10px'}} />Home</NavLink>
               <NavLink to='/movies'
        className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
              ? "pending"
              : "default"
          }
       ><img src={films} width='40' alt="" style={{marginRight: '10px'}} />Movies</NavLink>
       <NavLink to='/favorite'
        className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
              ? "pending"
              : "default"
          }
       ><img src={favorite} width='40' alt="" style={{marginRight: '10px'}} />Favorite Movies</NavLink>
      </Navbar>
       </div>
        <Outlet></Outlet>
        <div className='footer'><h1>Using <a href="https://www.themoviedb.org/" target="_blank">TMDB</a></h1></div>
       </div>
        </>
    )
}

export default RootPage
