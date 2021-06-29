import React, { Component } from 'react';
import {Burger} from '../../components/Burger'
import BurgerControls from '../../components/BurgerControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';

const INGREDIENTS_PRICE={
    salad: 150,
    cheese:250,
    bacon:800,
    meat:1500
};
const INGREDIENTS_NAMES={
    bacon: "Гахайн мах",
    cheese:"Бяслаг",
    meat:"Үхрийн мах",
    salad:"Салат"
};

class BurgerPage extends Component {

    constructor(props){
        super(props);
        this.state={
            ingredients:{
                salad: 0,
                cheese:0,
                meat:0,
                bacon: 0,
            },
            totalPrice:0,
            confirmOrder:false
        }
    }


    addIngredients=type=>{
        console.log(type);
        const newIngredients={...this.state.ingredients};
        const newTotal=this.state.totalPrice+INGREDIENTS_PRICE[type];
        newIngredients[type]++;
        this.setState({ingredients: newIngredients,totalPrice: newTotal});
    }
    
    minusIngredients=type=>{
        if(parseInt(this.state.ingredients[type])>0){
            const newIng={...this.state.ingredients};
            const newTotal=this.state.totalPrice-INGREDIENTS_PRICE[type];
            newIng[type]--;
            this.setState({ingredients: newIng, totalPrice: newTotal});
        }
    }
    showConfirmModel=()=>{
        this.setState({confirmOrder: true});
    }
    closeConfirmModel=()=>{
        this.setState({confirmOrder: false});
    }
    continueOrder=()=>{
        console.log("COntinue");
    }
    render(){
        const disableIngr={...this.state.ingredients};
        for(let key in disableIngr)
            disableIngr[key]=(disableIngr[key]<=0)?true:false;
        return(
            <div>   
               <Modal close={this.closeConfirmModel} show={this.state.confirmOrder}> 
                        <OrderSummary ingName={INGREDIENTS_NAMES} ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}
                        onCancel={this.closeConfirmModel}
                        onContinue={this.continueOrder}
                        />
                </Modal>
               <Burger ingredients={this.state.ingredients}/>
               <BurgerControls
                    disableIngr={disableIngr} 
                    totalPrice={this.state.totalPrice} 
                    minusClick={this.minusIngredients} 
                    addClick={this.addIngredients}  
                    ingName={INGREDIENTS_NAMES}
                    closeModal={this.closeConfirmModel}
                    showModal={this.showConfirmModel}
                    />               
            </div>
        );
    }
}

export default BurgerPage;