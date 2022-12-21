import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import './CartIcon.Styles.scss'

function CartIcon() {

    return (
        <div className='cart-icon-container'>
            <IoCartOutline className='shopping-icon' />
            {/* <span className='item-count'>0</span> */}
        </div>
    )
}

export default CartIcon;