import './App.css';
import Header from './component/header/header';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';
import {Route} from 'react-router-dom';
import Menu from './container/OurMenu/OurMenu';
import { Component } from 'react';
import OrderSummary from './container/OurMenu/OrderSummary/OrderSummary';
import {ContextProvider} from './Context';

class App extends Component {
	state = {
		userData: {
			DeliveryOption: '',
			Address: '',
			userName: '',
		},
		Cart: [],
		isAuthenticated: false,
	}

	render(){
		return (
			<div className="App">
				<Route path="/" exact component={Header} />
				<Route path="/" exact component={Body} />
				<Route path="/" exact component={Footer} />
				<ContextProvider>
					<Route path="/menu" render={() => <Menu userDataHandler={this.addUserData} CartHandler={this.addCartAttr}/>} />
					<Route path="/order-summary" exact render={() => <OrderSummary data={this.state}/>} />
				</ContextProvider>
			</div>
		);
	}
}

export default App;
