import React, { Component } from 'react';

import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious TJ burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: FCFA {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button 
                    clicked={this.props.purchaseCancelled}
                    btnType="Danger"
                >CANCEL</Button>
                <Button
                    clicked={this.props.purchaseContinued}
                    btnType="Success"
                >CONTINUE</Button>
            </Aux> 
        );
    }
}

export default OrderSummary;