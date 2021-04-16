import classes from './Coupen.module.css';
import React from 'react'

const Coupen = (props) => {
    return (
        <div className={classes.Coupen}>
            <img src={props.img} alt='OOPS'/>
        </div>
    )
}

export default Coupen;
