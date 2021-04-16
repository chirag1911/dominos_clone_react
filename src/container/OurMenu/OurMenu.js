import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import { Route } from 'react-router-dom';

const OurMenu = (props) => {
    return (
        <div style={{backgroundColor:'whitesmoke'}}>
            <Route path='/menu' render={() => <Header />} />
            <Route path='/menu' render={() => <Body />} />                
        </div>
    )
}

export default OurMenu;
