import React from 'react';
import classes from './header.module.css';
import Logo from '../../assets/Logo.png';
import {Link} from 'react-router-dom';

const header = (props) => {
    const logo = Logo;
    return (
        <div className={classes.Header}>
            <nav>
                <ul>
                    <li><Link to='/'><img src={logo} alt='OOPS'></img></Link></li>
                    <li><Link to='/menu'>OUR MENU</Link></li>
                    <li><Link to='/find-store'>FIND STORE</Link></li>
                    <li><Link to='/dift-card'>GIFT CARD</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                    <a href='/'><button>Download App</button></a>
                </ul>
            </nav>
        </div>
    )
}

export default header;
