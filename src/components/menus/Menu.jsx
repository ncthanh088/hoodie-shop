import React from 'react'
import Search from '../search/Search'
import "./Menu.Styles.scss"

function Menu() {
    return (
        <ul className='menu-bar'>
            <li>
                Hoodie
            </li>
            <li>
                All of hoodies
            </li>
            <li>
                Hoodie Rewind
            </li>
            <li>
                Adidas
            </li>
            <li>
                <Search />
            </li>

            <li className='IoCartOutline'>

            </li>
        </ul>
    )
}

export default Menu