import classes from './Card.module.css';
import React from 'react';
import {withRouter} from 'react-router-dom';

// props = {
//     link: navigationLink,
//     image: rendre_image,
//     heaging: card heading,
//     cap: card caption,
//     style: Addidtional styling
// }

const Card = (props) => {
    const Navigate = () =>{
        props.history.push(props.match.url + '/' + props.link)
    };

    return (
        <div className={classes.Card} style={props.style}>
            <h1>{props.heading}</h1>
            <img style={{width:'50%', height:'40%'}} src={props.image} alt='OOPS'/>
            <p style={{color:'rgb(22, 98, 165)', margin:'10px 20px'}} >
                {props.cap}
            </p>
            <button onClick={Navigate}><strong><p style={{ marginTop: '11px' }}>VIEW ALL</p></strong></button>
        </div>
    )
}

export default withRouter(Card);
