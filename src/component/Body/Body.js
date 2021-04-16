import React from 'react';
import BodyImage from '../../assets/header_bg.png';
import SubBodyImage from '../../assets/banner_brand_page_29032020.jpg'
import classes from './Body.module.css';
import Explore from './BodyComponent/Explore/Explore';
import Coupens from './BodyComponent/Coupens/Coupens';

const Body = (props) => {
    const redirect = () => {
        props.history.push('/menu');
    }
    return (
        <div style={{width:'100%'}}>
            <div className={classes.main}> 
                <div className={classes.left}>
                    <h1 style={{marginTop:'120px', color:'white'}}>Domino's online ordering</h1>
                    <p style={{ fontSize: '20px', margin: '-20px 50px 20px -20px', color:'#38bdf2'}}>Yummy pizza delivered fast & fresh</p>
                    <button onClick={redirect}>ORDER ONLINE NOW</button>
                    <img src={SubBodyImage} alt='OOPS' />
                </div>
                <div className={classes.right}>
                    <img src={BodyImage} alt='OPPS' />
                </div>
            </div>
            <Coupens/>
            <Explore/>
        </div>
    );
}

export default Body;