import { Link } from 'react-router-dom'
import React from 'react'
import { GlobalCtx } from '../App'

function Header(props) {

    const {gState, setGState} = React.useContext(GlobalCtx)

    const logout = ( 
        <Link to="/login" className="nav-link">
            <span 
                onClick={() => {
                    window.localStorage.removeItem("token")
                    setGState({...gState, token: null})
            }}>Logout </span>
        </Link>
    )

    return (

        <header>
            <div className="nav-container">
                <nav className='navbar navbar-expand-lg navbar-dark'>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>MyEvents</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            // should be the id value of the content
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav-links-container" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto text-center"
                                  //function to close the navigation dropdown when a link is clicked
                               onClick={() => {
                               const menu = document.querySelector('.navbar-collapse');
                               if (menu.classList.contains('show')) {
                                menu.classList.remove('show');
                                  } } }>
                                <li>
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/create" className="nav-link text-nowrap">Add New Event</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                    <Link to="/signup" className="nav-link">Signup</Link>
                                <li>
                                    <Link to="/login" className="nav-link" id="nav-logout">Login</Link>
                                </li>
                                <li>
                                    {gState.token ? logout : null}
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>

            </div>

        </header>
    )
}

export default Header