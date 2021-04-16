import classes from './Card.module.css';
import React, { useContext } from 'react';
import { Context } from '../../../../Context';

const Card = (props) => {
    const [cart,setCart] = useContext(Context);

    const addQuantity = () => {
        let temp_cart = cart;
        temp_cart[props.idx].qnt += 1;
        setCart(temp_cart);
        props.forceRender();
    }

    const removeQuantity = () => {
        let temp_cart = cart;
        temp_cart[props.idx].qnt -= 1;
        if(temp_cart[props.idx].qnt === 0){
            temp_cart.splice(props.idx,1);
        }
        setCart(temp_cart);
        props.forceRender();
    }

    return (
        <div className={classes.Card}>
            <div className={classes.first}>
                <img src={props.Image} alt='OOPS' />
            </div>
            <div className={classes.second}>
                <h1 className={classes.heading}>{props.heading}</h1>
                <h1 className={classes.cap}>{props.cap}</h1>
            </div>
            <div>
                <p>{'₹ ' + props.price}</p>
                <div className={classes.CardLeft}>
                    <div onClick={() => addQuantity()} style={{ borderRadius: '4px 0px 0px 4px' }}><p>add</p></div>
                    <div style={{ borderLeft: '0px', borderRight: '0px' }}><p>{props.qnt}</p></div>
                    <div onClick={() => removeQuantity()} style={{ borderRadius: '0px 4px 4px 0px' }}><p>del</p></div>
                </div>
            </div>
        </div>
    )
}

export default Card;
