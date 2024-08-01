import { Modal, Navbar } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import movie from '../../public/movie.svg';
import films from '../../public/films.svg';
import favorite from '../../public/favorite.svg';
import { useState } from 'react';
import burger from '../../public/burger.svg';
function Nav() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='box_nav'>
        <Navbar expand="lg" className='nav'>
        <button onClick={() => setModalShow(true)}><img src={burger} width='40'></img></button>
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
       <Modal
        size="xl"
        bg='black'
        fullscreen={true}
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className='modal_header'>
          <Modal.Title id="example-modal-sizes-title-sm">
           Navigation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_body'>
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
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Nav
