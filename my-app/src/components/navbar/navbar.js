import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu'
import logo from './logo-reprograma.png'
import './navbar.css'

const Navbar = (props) => (
    <nav className='navbar'>
        <Link to='/'>
            <img
                className='navbar__logo'
                src={logo}
                alt='Logo da reprograma, escrito com letras minúsculas e entre chaves a palavra reprograma'
            />
        </Link>
        <Menu user={props.user} history={props.history} />
    </nav>
)

export default Navbar