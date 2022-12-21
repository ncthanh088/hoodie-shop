import React from 'react'
import { Link } from 'react-router-dom'
// import CartIcon from '../carts/CartIcon'
import Search from '../search/Search'
import "./Menu.Styles.scss"

function Menu() {
    return (
        <nav className='nav-bar'>
            <div className='menu'>
                <Link className='menu-item' to={'/'}>
                    Hoodie
                </Link>
                <Link className='menu-item'>
                    All of hoodies
                </Link>
                <Link className='menu-item'>
                    Hoodie Rewind
                </Link>
                <Link className='menu-item'>
                    More...
                </Link>
            </div>
            <div className='site-bar'>
                {/* <CartIcon /> */}
                <Search />
            </div>
        </nav>

    )
}

export default Menu