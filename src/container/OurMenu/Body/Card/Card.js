import classes from './Card.module.css';
import React, { useContext } from 'react';
import Aux from '../../../../component/hoc/Auxilliary';
import {Context} from '../../../../Context';

// props = {
//     Image,
//     heading,
//     cap,
//     price,
//     show
// }


const Card = (props) => {
    const data = {
        Image: props.Image,
        cap: props.cap,
        price: props.price,
        heading: props.heading,
        qnt: 1
    }

    const [cart,setCart] = useContext(Context);

    const clickHandler = () =>{
        // console.log(cart);
        setCart(prevCart => [...prevCart,data]);
    }

    let render_content = null;
    let mainClass = '';
    if(props.show){
        mainClass = classes.Card;
        render_content = (
            <Aux>
                <img src={props.Image} alt='OOPS' ></img>
                <div className={classes.container}>
                    <strong><p style={{ fontSize: '18px', color: 'black', marginTop: '10px' }}>{props.heading}</p></strong>
                    <p style={{ fontSize: '15px', height:'40px', marginTop: '-10px' }}>{props.cap}</p>
                    <hr style={{ marginTop: '10px' }}></hr>
                    <h1 style={{ float: 'left', marginTop: '11px', color: 'rgb(5, 233, 5)' }}>{'₹ ' + props.price}</h1>
                    <button className={classes.Cartbutton} onClick={clickHandler} ><strong>ADD TO CART</strong></button>
                </div>
            </Aux>
        );
    }
    return (
        <div className={mainClass} style={props.style}>
            {render_content}
        </div>      
    );
}

export default Card;
