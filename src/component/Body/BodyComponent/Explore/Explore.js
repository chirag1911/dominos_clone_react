import React from 'react';
import Card from './Card/Card';
import MenuImage from '../../../../assets/Explore/menu.png';
import BirhtdayImage from '../../../../assets/Explore/birthday.png';
import CateringImage from '../../../../assets/Explore/catering.png';
import StoreImage from '../../../../assets/Explore/store.png';
import classes from './Explore.module.css';
import Aux from '../../../hoc/Auxilliary';

const Explore = (props) => {
    return (
        <Aux style={{width: '100%'}}>
            <h1 className={classes.Heading}>Explore</h1>
            <div className={classes.Explore}>
                <Card image={MenuImage} link={'DISCOVER PIZZA'} cap={'OUR MENU'} text={'Explore our range of delicious Pizzas, delivered in 30 minutes'} />
                <Card image={StoreImage} link={'FIND DOMINOS STORE'} cap={'NEARBY STORE'} text={'Find the dominos pizza restaurant near you'} />
                <Card image={BirhtdayImage} link={'BOOK NOW'} cap={'BIRTHDAY PARTY'} text={'Celebrate the joy of birthday with Fresh and Hot pizzas'} />
                <Card image={CateringImage} link={'BOOK NOW'} cap={'CATERING'} text={'Live dominos kitchen for weddings/corporate events'}/>
            </div>
        </Aux>
    )
}

export default Explore
