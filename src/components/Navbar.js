import React,{useState}from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const setClicked = () => setClick(!click)
    return (
        <div className="navbar--class">
            
            <nav className="navbar-container">
                <ul className={click ? 'navbar--items active' : 'navbar--items'}>
                <li className="navbar--item">
                    <Link className="navbar--link">CONTENTS</Link>
                </li>
                <li className="navbar--item" >
                    <Link className="navbar--link" >GLOSSARY</Link>
                </li>
                <li className="navbar--item" >
                    <Link className="navbar--link" >CREDITS</Link>
                </li>
                </ul>
                <div className="menu-icon" onClick={() => setClicked()}>
                <i  className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className="navbar-logo">
                <Link className="navbar-logo-link">
                <h1>E-BOOKS</h1>
                <i className="fas fa-book-open" /> 
                </Link>
            </div>
          

            </nav>
            
        </div>
    )
}

export default Navbar
