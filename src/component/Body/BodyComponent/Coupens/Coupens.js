import classes from './Coupens.module.css';
import React, { Component } from 'react';
import Coupen from './Coupen/Coupen';
import Image1 from '../../../../assets/Coupens/Home_airtel_20200601.jpg';
import Image2 from '../../../../assets/Coupens/Home_Amazon20200601.jpg';
import Image3 from '../../../../assets/Coupens/Home_Freecharge_20200601.jpg';
import Image4 from '../../../../assets/Coupens/Home_Mobikwik_20200305.jpg';
import Image5 from '../../../../assets/Coupens/Home_Paytm_2020601.jpg';
import Image6 from '../../../../assets/Coupens/Home_payzapp_20200601.jpg';
import Aux from '../../../hoc/Auxilliary';


class Coupens extends Component {
    state = {
        Image_arr: [Image5, Image2, Image1, Image3, Image4, Image6],
        isPrevDisabled: true,
        isNextDisabled: false,
        showCounter: 1,
        content_render: null
    }

    componentDidMount(){
        this.updateRenderContent(this.state.showCounter);
    }

    updateRenderContent = (showCounter) =>{
        if(showCounter<1 || showCounter>5) return;
        const temp_content_render = (
            <Aux>
                <Coupen img={this.state.Image_arr[showCounter-1]}/>
                <Coupen img={this.state.Image_arr[showCounter]} />
            </Aux>
        );
        this.setState({
            content_render: temp_content_render,
            showCounter: showCounter,
            isNextDisabled: showCounter===5,
            isPrevDisabled: showCounter===1
        });
    }

    render(){
        return (
            <div className={classes.Coupens}>
                <h1>Coupens & Offers</h1><br />
                <button disabled={this.state.isPrevDisabled} className={classes.Prev} onClick={()=>this.updateRenderContent(this.state.showCounter-2)}>{'<'}</button>
                {this.state.content_render}
                <button disabled={this.state.isNextDisabled} className={classes.Next} onClick={()=>this.updateRenderContent(this.state.showCounter+2)}>{'>'}</button>
            </div>
        );
    };
}

export default Coupens;