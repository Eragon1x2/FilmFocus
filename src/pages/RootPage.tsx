import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav';

function RootPage() {
    return (
        <>
       <div className="wrapper">

        <Nav></Nav>
      <div className='content'>  <Outlet></Outlet></div>
        <div className='footer'><h1>Using <a href="https://www.themoviedb.org/" target="_blank">TMDB</a></h1></div>
       </div>
        </>
    )
}

export default RootPage
