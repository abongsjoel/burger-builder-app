import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkooutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/content-data');
    }

    render() {
        return (
            <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkooutCancelled={this.checkooutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
        );
    }
}

export default Checkout;