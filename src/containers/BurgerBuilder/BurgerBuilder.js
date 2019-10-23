import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 500,
    cheese: 400,
    meat: 1300,
    bacon: 700
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4000,
        message: 'TJ the boss is at work'
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let errMessage = this.state.message;
        if (oldCount >= 0) {
            errMessage = "Cool, you added "+ type ;
        }
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
            message: errMessage
        });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let errMessage = this.state.message;
        if (oldCount <= 0) {
            errMessage = "Sorry but you dont have any "+ type + " to remove.";
            this.setState({
                message: errMessage
            })
            return;
        }
        const updatedCount = oldCount - 1; 
        if (updatedCount === 0) {
            errMessage = 'TJ the boss is at work';
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
            message: errMessage
        });
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    message={this.state.message}
                />
                <p>{this.state.message}</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;