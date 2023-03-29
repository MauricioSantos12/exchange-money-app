import './header.scss';
import { RefreshCcw } from 'feather-icons-react';
import React, { useState } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false); 
    return (
        <nav>
            <RefreshCcw  aria-label="icon page" className='icon--menu' />
            <h1>Personal change money</h1>
        </nav>
    )
}

export default Header