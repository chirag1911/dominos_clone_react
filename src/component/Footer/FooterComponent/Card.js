import classes from './Card.module.css';
import React from 'react';

const Card = (props) => {
    let render_content = null;
    if(props.arr){
        render_content = props.arr.map(el => <li key={el}><a href='/'>{el}</a></li>);
    }
    return (
        <div className={classes.Card}>
            <h1>{props.Heading}</h1>
            <ul>
                {render_content}
            </ul>
        </div>
    );
}

export default Card;
