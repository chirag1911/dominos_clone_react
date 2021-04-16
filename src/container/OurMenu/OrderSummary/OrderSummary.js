import classes from './OrderSummary.module.css';
import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom';
import LogoImage from '../../../assets/Menu/logo_white.svg';
import Card from './Card/Card';
import { Context } from '../../../Context';

const OrderSummary = (props) => {
        const [cart,setCart,userData,setUserData] = useContext(Context);
        const [state,setState] = useState(0);

        const forceRender = () =>{
            let temp_state = state + 1;
            setState(temp_state);
        }

        let render_contet = [];
        let sub_total = 0;
        for(let i=0;i<cart.length;i++){
            sub_total += cart[i].qnt * cart[i].price;
            let temp = (
                        <Card Image={cart[i].Image} heading={cart[i].heading} key={i} forceRender={forceRender}
                            cap={cart[i].cap} price={cart[i].price} qnt={cart[i].qnt} idx={i}
                        />
                    )
            render_contet.push(temp);
        }
        return (
            <div style={{ width: '100%', backgroundColor: 'whitesmoke', backgroundSize: 'cover' }}>
                <div className={classes.Header}>
                    <div className={classes.SideDrawer}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <NavLink className={classes.link} to={'/menu/veg-pizza'}><img src={LogoImage} alt='OOPS' /></NavLink>
                </div>
                <div className={classes.left}>
                    <p style={{ textAlign: 'left', marginTop: '20px' }}>{ cart.length +  ' Items you have selected'}</p>
                    <NavLink to={'/menu/veg-pizza'} style={{ textDecoration: 'none' }}><p style={{ textAlign: 'right', color: '#5d99d8', marginTop: '-40px' }}>Explore Menu</p></NavLink>
                    {render_contet}
                </div>
                <div className={classes.right}>
                    <p>DeliveryOption: {userData.deliveryOption}</p>
                    <p>Address: {userData.address}</p>
                    <p>User: {userData.userName}</p>
                    <p>Gift Coupens</p>
                    <p>Sub Total:{sub_total}</p>
                    <p>GST: {(sub_total*0.18).toFixed(2)}</p>
                    <p>Total: {(sub_total*1.18).toFixed(2)}</p>
                    <button>Place Order</button>
                </div>
            </div>
        );
}

export default OrderSummary;
