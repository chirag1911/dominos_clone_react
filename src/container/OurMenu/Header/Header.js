import classes from './Header.module.css';
import React, { useContext } from 'react';
import LogoImage from '../../../assets/Menu/logo_white.svg';
import BodyImage from '../../../assets/banner_location_page_29032020_1.jpg';
import {Route,NavLink, Link, withRouter} from 'react-router-dom';
import { Context } from '../../../Context';

const  Header = (props) => {
    const [cart,setCart,userData,setUserData] = useContext(Context);

    const changeRadioInputHandler = (event) =>{
        let temp_userData = userData;
        temp_userData.deliveryOption = event.target.value;
        setUserData(temp_userData);
    }

    const changeInputHandler = (event) => {
        let temp_userData = userData;
        temp_userData.address = event.target.value;
        setUserData(userData);
    }

    return (
        <div>
            <div className={classes.Header}>
                <div className={classes.SideDrawer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <NavLink className={classes.link} to={'/menu'}><img src={LogoImage} alt='OOPS' /></NavLink>
                <ul className={classes.UL} style={{ marginLeft: '270px' }}>
                    <input onChange={(event) => changeRadioInputHandler(event)} value='Delivery' className={classes.radioButton} type='radio' name="DeliveryOption" id='Delivery' />
                    <label htmlFor="Delivery" >Delivery</label>
                    <input onChange={(event) => changeRadioInputHandler(event)} value='Pick UP' type='radio' name="DeliveryOption" id='PickUp' />
                    <label htmlFor='PickUp' >Pick Up/Dine-in</label>
                    <input className={classes.address} onChange={(event) => changeInputHandler(event)} placeholder='Add Shop Address'></input>
                    <div className={classes.account}>
                        <p>MY ACCOUNT</p>
                        <ul style={{ display: 'inline-flex' }}>
                            <Link to='/menu' style={{ textDecoration: 'none', marginLeft: '-35px', color: '#69d8fa' }}>LogIN</Link>
                            <Link to='/menu' style={{ textDecoration: 'none', marginLeft: '10px', color: '#69d8fa' }}>SignUP</Link>
                        </ul>
                    </div>
                </ul>
            </div>
            <div className={classes.SecondHeader}>
                <ul>
                    <NavLink className={classes.link} to={props.match.url + '/bestsellers'}><li>BESTSELLERS</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/pasta-pizza-party'}><li>PASTA PIZZA PARTY</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/veg-pizza'}><li>VEG PIZZAS</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/non-veg-pizza'}><li>NON VEG PIZZAS</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/side-orders'}><li>SIDE ORDERS</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/beverages'}><li>BEVARAGES</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/pizza-mania'}><li>PIZZA MANIA</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/chicken'}><li>CHICKEN</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/dessert'}><li>DESSERT</li></NavLink>
                    <NavLink className={classes.link} to={props.match.url + '/meals-and-combos'}><li>MEALS & COMBOS</li></NavLink>
                </ul>
            </div>
            <Route path='/menu' exact render={() =>
                <img src={BodyImage} alt='OOPS' style={{ width: '100%', height: '250px', marginTop: '8px' }} />
            } />

        </div>
    );
}

export default withRouter(Header);
