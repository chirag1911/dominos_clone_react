import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <img style={{paddingTop:'40px', width:'60px', height:'80px'}} src={props.image} alt='OPPS'/>
            <h3>{props.cap}</h3>
            <p>{props.text}</p>
            <hr style={{border:'0.1px dotted black', width:'100%'}}></hr>
            <a href='/'><b>{props.link}</b></a>
            <div className={classes.jadu}>
                <h1>
                    It's magic
                </h1>
            </div>
        </div>
    );
}

export default Card;
