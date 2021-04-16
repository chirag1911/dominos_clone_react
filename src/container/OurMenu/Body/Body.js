import React, {useContext, useState } from 'react';
import {Route,withRouter} from 'react-router-dom';
import Home from './Home/Home';
import classes from './Body.module.css';
import BrandImage from '../../../assets/banner_brand_page_29032020.jpg';
import RenderCard from './RenderCard/RenderCard';
import CartImage from '../../../assets/Menu/empty_cart.png';
import {Context} from '../../../Context';

const Body = (props) => {
    const [cart,setCart] = useContext(Context);
    const [state,setState] = useState(0);
    let total = 0;

    const forceRender = () => {
        const temp_state = state + 1;  
        setState(temp_state); 
    }

    const addQuantity = (idx) =>{
        let temp_cart = cart;
        temp_cart[idx].qnt += 1;
        setCart(temp_cart);
        forceRender();
    }

    const removeQuantity = (idx) =>{
        let temp_cart = cart;
        temp_cart[idx].qnt -= 1;

        if(temp_cart[idx].qnt === 0){
            temp_cart.splice(idx,1);
        }
        setCart(temp_cart);
        forceRender();        
    }

    const ClickHandler = (event) => {
        props.history.push('/order-summary')
    }

        let side_price = [99, 129, 129, 129, 139, 139, 139, 25, 25, 99, 99, 145, 135, 45, 39, 105, 135, 145, 100, 59, 59, 59];
        let side_heading = ['Garlic Breadsticks', 'Creamy Tomato Pasta Veg', 'Cheesy Jalapeno Pasta Veg', 'Tikka Masala Pasta Veg', 'Creamy Tomato Pasta Non Veg', 'Cheesy Jalapeno Pasta Non Veg', 'Tikka Masala Pasta Non Veg', 'Cheesy Jalapeno Dip', 'Cheesy Dip', 'Choco Lava Cake', 'Butterscotch Mousse Cake', 'Classic Stuffed Garlic Bread', 'Taco Mexicana Non Veg', 'Chicken Parcel', 'Veg Parcel', 'Burger Pizza - Classic Veg', 'Burger Pizza - Premium Veg', 'Burger Pizza - Classic Non Veg', 'Tomato Ketchup', 'Potato Cheese Shots', 'Crinkle Fries', 'Brownie Fantasy'];
        let side_cap = ['Baked to perfection. Your perfect pizza partner! Tastes best with dip', 'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum, Parsley sprinkle', 'Instant Fusilli Pasta, Cheesy Jalapeno Sauce, Onion, Jalapeno, Parsley sprinkle', 'Instant Fusilli Pasta, Spicy Red dressing, Onion, Paneer Tikka, Parsley sprinkle', 'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olives, BBQ Pepper Chicken, Parsley sprinkle', 'Instant Fusilli Pasta, Cheesy Jalapeno Sauce, Onion, Jalapeno, BBQ Pepper Chicken, Parsley sprinkle', 'Instant Fusilli Pasta, Spicy Red dressing, Onion, Chicken Tikka, Parsley sprinkle', 'A spicy, tangy flavored cheese dip is a an absolute delight with your favourite Garlic Breadsticks & Stuffed Garlic Bread', 'An all-time favorite with your Garlic Breadsticks & Stuffed Garlic Bread for a Cheesy indulgence', 'Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake', 'Sweet temptation! Butterscotch flavored mousse', 'Freshly baked garlic bread with cheese, juicy corn & tangy jalapeno', 'Truly irresistible! Crispy taco with non-veg patty & creamy harissa sauce', 'Snacky bites! Pizza rolls with chicken sausage & creamy harissa sauce', 'nacky bites! Pizza rolls with paneer & creamy harissa sauce', 'Oven-baked buns with cheese, tomato & capsicum in creamy mayo', 'Oven-baked buns with cheese, paneer, tomato, capsicum & red paprika in creamy mayo', 'Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo', 'Goodness of Tomato Ketchup in mini sachets,you\'ll enjoy it.it is so creamy and sexy, even you can put it into your ass.', 'Crisp and golden outside, flavorful burst of cheese, potato & spice inside', 'Crispy wavy masala coated fries served with a spicy tomato chilli sauce', 'Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce'];
        let bev_price = [60, 60, 50, 60, 60, 50, 60, 50, 20];
        let bev_heading = ['Pepsi (500ml)', 'Mountain Dew (500ml)', 'Slice (350ml)', '7Up (500ml)', 'Mirinda (500ml)', 'Lipton Ice Tea (250ml)', 'Pepsi Black Can', 'NIMBOOZ (250Ml)', 'Bailley One (500ml)'];
        let bev_cap = ['Sparkling and Refreshing Beverage', 'Strong and Refreshing', 'Great Mango Taste', 'Refreshing clear drink with a natural lemon flavor', 'Delicious Orange Flavoured beverage', 'Naturally Refreshing, Not Too Sweet, No Gas', 'Maximum Taste Zero Calories', 'NIMBOOZ', 'Packaged Drinking Water'];
        let veg_price = [199, 335, 395, 395, 395, 450, 450, 395, 305, 335, 395, 450, 305, 305, 450, 395, 305];
        let veg_heading = ['Margherita', 'Double Cheese Margherita', 'Farmhouse', 'Peppy Paneer', 'Mexican Green Wave', 'Deluxe Veggie', 'Veg Extravaganza', 'Veggie Paradise', 'Cheese n Corn', 'Fresh Veggie', 'Paneer Makhani', 'Indi Tandoori Paneer', 'Cheese n Tomato', 'Achari Do Pyaza', 'Kadhai Paneer', 'Creamy Tomato Pasta Pizza - Veg', 'Moroccan Spice Pasta Pizza - Veg'];
        let veg_cap = ['A classic delight with 100% Real mozzarella cheese', 'A classic delight loaded with extra100%real mozzarella cheese', 'Delightful combination of onion, capsicum, tomato & grilled mushroom', 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 'Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno', 'Veg delight - onion, capsicum, grilled mushroom, corn & paneer', 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', 'The awesome foursome! Golden corn, black olives, capsicum, red paprika', 'Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !', 'Delectable combination of onion & capsicum, a veggie lovers pick', 'Flavorful twist of spicy makhani sauce topped with paneer & capsicum', 'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo', 'A delectable combination of cheese and juicy tomato', 'Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!', 'Paneer chunks in your favourite spicy kadhai masala flavors, with toppings of onion & capsicum', 'tomato pasta topping , green capsicum, crunchy red and yellow bell peppers and black olives', 'A pizza loaded with a spicy combination of Harissa sauce and delicious pasta.'];
        let nonveg_price = [399, 339, 459, 579, 579, 459, 579, 339, 309, 399, 579];
        let nonveg_heading = ['Creamy Tomato Pasta Pizza - Non Veg', 'Moroccan Spice Pasta Pizza - Non Veg', 'Chicken Golden Delight', 'Non Veg Supreme', 'Chicken Pepperoni', 'Chicken Fiesta', 'Chicken Dominator', 'Pepper Barbecue Chicken', 'Chicken Sausage', 'Pepper Barbecue & Onion', 'Indi Chicken Tikka'];
        let nonveg_cap = ['Loaded with a delicious creamy tomato pasta topping, BBQ pepper chicken, green capsicum, crunchy red and yellow bell peppers.', 'A pizza loaded with a spicy combination of Harissa sauce, Peri Peri chicken chunks and delicious pasta.', 'Double pepper barbecue chicken, golden corn and extra cheese, true delight', 'Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers', 'A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese', 'Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta', 'Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers', 'Pepper barbecue chicken for that extra zing', 'American classic! Spicy, herbed chicken sausage on pizza', 'A classic favourite with pepper barbeque chicken & onion', 'The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo'];
        let man_price = [159, 139, 109, 99, 99, 99, 79, 79, 59, 59];
        let man_heading = ['Non Veg Loaded', 'Veg Loaded', 'Pepper Barbecue Chicken', 'Paneer & Onion', 'Cheesy', 'Chicken Sausage', 'Capsicum', 'Golden Corn', 'Onion', 'Tomato'];
        let man_cap = ['Chicken sausage, pepper barbecue chicken & peri-peri chicken in a fresh pan crust', 'Tomato, Jalapeno, Corn, Grilled Mushroom & crushed Aranchini Patty in a fresh pan crust', 'Pepper barbecue chicken for that extra zing', 'Creamy Paneer & Onion', 'Cheese lovers paradise, loaded with mozzarella, cheddar & gouda cheese', 'American classic! Spicy, herbed chicken sausage on pizza', 'Fresh & crisp capsicum for the perfect crunch in pizza', 'Sweet & juicy golden corn for that lipsmacking taste', 'Crunchy onion on a cheesy base. The pizza mania classic', 'Juicy tomato in a flavourful combination with cheese & tangy sauceJuicy tomato in a flavourful combination with cheese & tangy sauce'];
        let chicken_price = [119,119,109,149,119];
        let chicken_heading = ['Roasted Chicken Wings Peri-Peri', 'Roasted Chicken Wings Classic Hot Sauce', 'Chicken Meatballs Peri-Peri Seasoning', 'Boneless Chicken Wings Peri-Peri','Chicken Meatballs Peri-Peri Sauce'];
        let chicken_cap = ['Crisp, roasted chicken wings in classic hot sauce and peri-peri flavour', 'Crisp, Roasted Chicken Wings available in Classic Hot Sauce', 'Tender, Juicy, Melt in Mouth Chicken Meatballs in Peri Peri seasoning', 'Boneless Delight! Baked to Golden Perfection with Peri Peri Sauce','Tender, Juicy, Melt in Mouth Chicken Meatballs in Peri Peri Sauce'];
        let des_price = [99,99,59];
        let des_heading = ['Choco Lava Cake', 'Butterscotch Mousse Cake','Brownie Fantasy'];
        let des_cap = ['Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake', 'Sweet temptation! Butterscotch flavored mousse', 'Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce'];
        let pas_price = [399,309,399,339,129,129,129,139,139,139,299,499,529,379];
        let pas_heading = ['Creamy Tomato Pasta Pizza - Veg', 'Moroccan Spice Pasta Pizza - Veg', 'Creamy Tomato Pasta Pizza - Non Veg', 'Moroccan Spice Pasta Pizza - Non Veg', 'Creamy Tomato Pasta Veg', 'Cheesy Jalapeno Pasta Veg', 'Tikka Masala Pasta Veg', 'Creamy Tomato Pasta Non Veg', 'Cheesy Jalapeno Pasta Non Veg', 'Tikka Masala Pasta Non Veg', 'Pasta Pizza Specials (Veg)', 'Pasta Pizza Family Treat (Veg)', 'Pasta Pizza Party Specials (Veg)','Pasta Treat Specials (Veg)'];
        let pas_cap = ['Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers and black olives', 'A pizza loaded with a spicy combination of Harissa sauce and delicious pasta.', 'Loaded with a delicious creamy tomato pasta topping, BBQ pepper chicken, green capsicum, crunchy red and yellow bell peppers.', 'A pizza loaded with a spicy combination of Harissa sauce, Peri Peri chicken chunks and delicious pasta.', 'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum, Parsley sprinkle', 'Instant Fusilli Pasta, Cheesy Jalapeno Sauce, Onion, Jalapeno, Parsley sprinkle', 'Instant Fusilli Pasta, Spicy Red dressing, Onion, Paneer Tikka, Parsley sprinkle', 'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olives, BBQ Pepper Chicken, Parsley sprinkle', 'Instant Fusilli Pasta, Cheesy Jalapeno Sauce, Onion, Jalapeno, BBQ Pepper Chicken, Parsley sprinkle', 'Instant Fusilli Pasta, Spicy Red dressing, Onion, Chicken Tikka, Parsley sprinkle', 'Reg Moroccan Pasta Pizza + Garlic Bread + Pepsi', 'Med Creamy Tomato Pasta Pizza + Garlic Bread + Pepsi', 'Med Creamy Tomato Pasta Pizza + Tikka Masala Pasta + Pepsi','Veg Creamy Tomato Pasta + Veg Tikka Masala Pasta + Garlic Bread + Pepsi'];
        let meal_price = [695,755,875,635,199,409,389,789,578,199,295,295,299,379,485,485,485,499,529,899,899,899,1299,1299,1499,499,499,429,429,729,729,719,769,819,819];
        let meal_heading = ['Ultimate cheese burst Deluxe Combo (Veg)', 'Ultimate cheese burst Premium Combo (Veg)', 'Ultimate cheese burst Premium Combo (N Veg)', 'Ultimate cheese burst Deluxe Combo (N Veg)', 'Work from Home Veg Treat', 'Everyday Value 2 Reg Classic Paneer Combo', 'Everyday Value 2 Reg Classic Mix Combo', 'Everyday Value 2 Med Deluxe Paneer Combo', 'Everyday Value 2 Med Classic Mix Combo', 'Work from Home Non Veg Treat', 'Movie Marathons Specials (Veg)', 'Movie Marathons Specials (N. Veg)', 'Pasta Pizza Specials (Veg)', 'Pasta Treat Specials (Veg)', 'Family Treat Veg Meals', 'Family Treat Paneer Meals', 'Family Treat Non Veg Meals', 'Pasta Pizza Family Treat (Veg)', 'Pasta Pizza Party Specials (Veg)', 'tay at Home Family Special (Veg)', 'Family House Party - Veg Value Combo', 'Family House Party - Non Veg Value Combo', 'Family House Party - Veg Deluxe Combo', 'Family House Party - Non Veg Deluxe Combo', 'Family House Party - Non Veg Premium Combo', 'Everyday Value 2 Reg Veg Deluxe Combo', 'Everyday Value 2 Reg N.Veg Deluxe Combo', 'Everyday Value 2 Reg Veg Premium Combo', 'Everyday Value 2 Reg N.Veg Premium Combo', 'Everyday Value 2 Med Veg Combo', 'Everyday Value 2 Med N. Veg Combo', 'Everyday Value 2 Med Veg Deluxe Combo', 'Everyday Value 2 Med N.Veg Deluxe Combo', 'Everyday Value 2 Med Veg Premium Combo','Everyday Value 2 Med N.Veg Premium Combo'];
        let meal_cap = ['Medium Farmhouse Cheese Burst Pizza + Choco Lava Cake + Garlic Bread', 'Medium Veg Extravaganza Cheese Burst Pizza + Choco Lava Cake + Garlic Bread', 'Medium Chicken Dominator Cheese Burst Pizza + Choco Lava Cake + Garlic Bread', 'Medium Pepper BBQ Chicken Cheese Burst Pizza + Choco Lava Cake + Garlic Bread', 'Reg Cheese & Corn Pizza + Pepsi', '2 Reg Pizzas (Peppy Paneer + Indi Tandoori Paneer)', '2 Reg Pizzas (Pepper Barbecue and Onion + Farmhouse)', '2 Med Pizzas (Peppy Paneer + Indi Tandoori Paneer)', 'Extra Innings 2 Med Classic Mix Combo 2 Med Pizzas (Pepper Barbecue and Onion + Farmhouse)', 'eg Chicken Sausage Pizza + Pepsi', 'Reg Fresh Veggie Pizza + Garlic Bread + Pepsi', 'Reg Pepper BBQ Chicken Pizza + Garlic Bread + Pepsi', 'Reg Moroccan Pasta Pizza + Garlic Bread + Pepsi', 'eg Creamy Tomato Pasta + Veg Tikka Masala Pasta + Garlic Bread + Pepsi', 'Med Farmhouse Pizza + Garlic Bread + Pepsi', 'Med Peppy Paneer Pizza + Garlic Bread + Pepsi', 'Med Pepper BBQ Chicken Pizza + Garlic Bread + Pepsi', 'Med Creamy Tomato Pasta Pizza + Garlic Bread + Pepsi', 'Med Creamy Tomato Pasta Pizza + Tikka Masala Pasta + Pepsi', '2 Med Pizzas(Farmhouse + Peppy Paneer) + 2(Garlic Bread + Pepsi)', 'Large Fresh Veggie Pizza + Garlic Bread + 4 Brownie Fantasy + 2 Pepsi', 'Large Pepper BBQ Chicken Pizza + Garlic Bread + 4 Brownie Fantasy + 2 Pepsi', 'Large Veg Extravaganza Pizza + 2 Garlic Bread + 4 Choco lava cake + 2 Pepsi', 'Large Chicken Golden Delight Pizza + 2 Garlic Bread + 4 Choco lava cake + 2 Pepsi', 'Large Non Veg Supreme Pizza + 2 Stuffed Garlic Bread + 4 Choco lava cake + 2 Pepsi', '2 Reg Pizzas (Farmhouse + Veg Extravaganza)', '2 Reg Pizzas (Pepper BBQ & onion + Chicken Golden Delight)', '2 Reg Pizzas (Deluxe Veggie + Veg Extravaganza)', '2 Reg Pizzas (Chicken Golden Delight + Chicken Fiesta)', '2 Med Pizzas (Farmhouse + Peppy Paneer)', '2 Med Pizzas (Pepper BBQ & Onion)', '2 Med Pizzas (Farmhouse + Veg Extravaganza)', '2 Med Pizzas (Pepper BBQ & Onion + Chicken Fiesta)', '2 Med Pizzas (Deluxe Veggie + Veg Extravaganza)','2 Med Pizzas (Chicken Golden Delight + Chicken Fiesta)'];
        let best_price = [459,199,379,399,579,399,309,399,309];
        let best_heading = ['The Unthinkable Pizza', 'Margherita', 'Farmhouse', 'Peppy Paneer', 'Veg Extravaganza', 'Veggie Paradise', 'Cheese n Corn', 'Pepper Barbecue Chicken','Chicken Sausage'];
        let best_cap = ['Loaded with Plant Based Protein topping along with Black Olives & Red Paprika– enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!', 'Classic delight with 100% real mozzarella cheese', 'Delightful combination of onion, capsicum, tomato & grilled mushroom', 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', 'The awesome foursome! Golden corn, black olives, capsicum, red paprika', 'A delectable combination of sweet & juicy golden corn', 'Pepper barbecue chicken for that extra zing','American classic! Spicy, herbed chicken sausage on pizza'];

        let CartClass = classes.Empty;
        let isSubmitable = false;
        let cart_content = (
                <div>
                    <img src={CartImage} alt='OOPS' style={{width:'170px', height:'180px', marginTop:'-300px', float:'right'}} />
                    <div style={{marginTop:'300px'}}>
                        <p style={{fontSize:'30px' , fontWeight:'bold'}}>Your Cart is Empty</p>
                        <p style={{fontSize:'16px', textAlign:'left', margin:'-20px 0px 0px 21px'}}>Please add some items from menu</p>
                    </div>
                </div>
            );

        if(cart.length !== 0){
            isSubmitable = true;
            CartClass = classes.CartWithItem;
            let temp_cart_content = [];
            for(let i=0;i<cart.length;i++){
                total += cart[i].qnt * cart[i].price;
                temp_cart_content.push(
                    <div key={i}>
                        <div className={classes.UpperCard}>
                            <img src={cart[i].Image} alt='OOPS' />
                            <div>
                                <p className={classes.cardheading}>{cart[i].heading}</p>
                                <p className={classes.cardcap}>{cart[i].cap}</p>
                            </div>
                        </div>
                        <div className={classes.CardLeft}>
                            <div onClick={() => addQuantity(i)} style={{borderRadius:'4px 0px 0px 4px'}}><p>add</p></div>
                            <div style={{borderLeft:'0px', borderRight:'0px'}}><p>{cart[i].qnt}</p></div>
                            <div onClick={() => removeQuantity(i)} style={{borderRadius:'0px 4px 4px 0px'}}><p>del</p></div>
                        </div>
                        <div className={classes.CardRight}>{'₹ ' + cart[i].qnt* cart[i].price}</div>
                        <hr style={{width:'88%', float:'left', marginLeft:'20px'}}></hr>
                    </div>
                )
            }
            cart_content = temp_cart_content;
            // console.log('ji')
        }

        return (
            <div style={{width:'100%', backgroundColor:'whitesmoke'}}>
                <Route path={props.match.url + '/'} exact component={Home} />
                <Route path={props.match.url + '/veg-pizza'} exact 
                    render={() => <RenderCard price={veg_price} cap={veg_cap} heading={veg_heading} folderName={'VegPizza'} />}
                />
                <Route path={props.match.url + '/non-veg-pizza'} exact 
                    render={() => <RenderCard price={nonveg_price} cap={nonveg_cap} heading={nonveg_heading} folderName={'NonVegPizza'} />}
                />
                <Route path={props.match.url + '/pizza-mania'} exact 
                    render={() => <RenderCard price={man_price} cap={man_cap} heading={man_heading} folderName={'PizzaMania'}/>} 
                />
                <Route path={props.match.url + '/side-orders'} exact 
                    render={() => <RenderCard price={side_price} heading={side_heading} cap={side_cap} folderName={'SideOrders'} />}
                />
                <Route path={props.match.url + '/beverages'} exact
                    render={() => <RenderCard cap={bev_cap} price={bev_price} heading={bev_heading} folderName={'Beverages'} />}
                />
                <Route path={props.match.url + '/chicken'} exact
                    render={() => <RenderCard cap={chicken_cap} price={chicken_price} heading={chicken_heading} folderName={'Chicken'} />}
                />
                <Route path={props.match.url + '/pasta-pizza-party'} exact
                    render={() => <RenderCard cap={pas_cap} price={pas_price} heading={pas_heading} folderName={'PastaPizzaParty'} />}
                />
                <Route path={props.match.url + '/dessert'} exact
                    render={() => <RenderCard cap={des_cap} price={des_price} heading={des_heading} folderName={'Dessert'} />}
                />
                <Route path={props.match.url + '/meals-and-combos'} exact
                    render={() => <RenderCard cap={meal_cap} price={meal_price} heading={meal_heading} folderName={'MealsAndCombos'} />}
                />
                <Route path={props.match.url + '/bestsellers'} exact
                    render={() => <RenderCard cap={best_cap} price={best_price} heading={best_heading} folderName={'BestSellers'} />}
                />
                <div className={classes.Right}>
                    <img src={BrandImage} alt='OOPS' style={{ marginLeft: '-190px', position: 'fixed' }} />
                    <div className={CartClass}>
                        {cart_content}
                    </div>
                    {isSubmitable ?
                        <div className={classes.submit}>
                            <h1 style={{marginTop:'0px'}}>{'Total ₹ ' + total}</h1>
                            <button onClick={(event) => ClickHandler(event)}>Check out</button>
                        </div>
                    : null}
                </div>
            </div>
        );   
}

export default withRouter(Body);
