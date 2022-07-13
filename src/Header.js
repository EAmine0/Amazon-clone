import React from 'react'
import './Header.css'
import amazonlogo from './amazon-white-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <div className='header'>

            <img 
            className='header_logo'
            src={amazonlogo}
            alt='Amazon logo'/>

            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <SearchIcon className='header_searchIcon'/>
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Order</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <div className='header_basket'>
                    <ShoppingBasketIcon className='header_basketLogo'/>
                    <span className='header_basketCounter'>100</span>
                </div>
            </div>

        </div>


    )
}

export default Header
