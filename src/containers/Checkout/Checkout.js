import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {}
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];   //+ converst the value to a number
        }
        this.setState({ingredients: ingredients})
    }
    checkooutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkooutCancelled={this.checkooutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.url + '/contact-data'} component={ ContactData } />
            </div>
            
        );
    }
}

export default Checkout;