import classes from './Home.module.css';
import React from 'react';
import Card from './Card/Card';
import vegPizza from '../../../../assets/Menu/home/my-vegpizza.jpg';
import nonvegPizza from '../../../../assets/Menu/home/my-nonveg.jpg';
import pizzaMania from '../../../../assets/Menu/home/my-pizzamania.png';
import sideBeverage from '../../../../assets/Menu/home/sides_beverages.jpg';

const Home = (props) => {
    let Cardstyle = {
        width: '31%',
        marginRight:'1%',  
        height: '500px'
    }

    return (
        <div className={classes.Home}>
            <div style={{display:'inline-flex', width:'100%', marginLeft:'1%'}}>
                <Card link='veg-pizza' image={vegPizza} heading='VEG PIZZA' style={Cardstyle}
                    cap = 'A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, its softer and tastier'
                />
                <Card link='non-veg-pizza' image={nonvegPizza} heading='NON-VEG PIZZA' style={Cardstyle}
                    cap='Choose your favourite non-veg pizzas from the Dominos Pizza menu.Get fresh non- veg pizza with your choice of crusts & toppings'
                />
                <Card link='pizza-mania' image={pizzaMania} heading='PIZZA MANIA' style={Cardstyle}
                    cap = 'Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings'
                />
            </div>
            <div style={{display:'inline-flex', width:'100%', marginLeft:'1%'}}>
                <Card link='side-beverage' image={sideBeverage} heading='SIDES & BEVERAGES' style={Cardstyle}
                    cap='Complement your pizza with wide range of sides & beverages available at Dominos Pizza India'
                />
            </div>
        </div>
    )
}

export default Home;
