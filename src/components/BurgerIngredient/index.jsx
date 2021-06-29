import React from 'react'
import css from './Gradient.module.css'

const BurgerIngredient=(props)=>{

    switch(props.type){
        case "bread-top":
            return (
                <div className={css.BreadTop}>
                    <div className={css.Seed}> </div>
                    <div className={`${css.Seed} ${css.Second}`} ></div>
                    <div className={`${css.Seed} ${css.Third}`}></div>
                    <div className={`${css.Seed} ${css.Fourth}`}></div>
                </div>
            );            
            break;
        case "salad":
            return <div className={css.Salad}></div>;            
            break;
        case "bacon":
            return <div className={css.Bacon}></div>;            
                break;
        case "meat":
            return <div className={css.Meat}></div>;            
            break;
        case "cheese":
            return <div className={css.Cheese}></div>;            
            break;
        case "bread-bottom":
            return <div className={css.BreadBottom}></div>;            
                break;
        default:
            break;
    }
    return <div>...</div>;
    
}

export default BurgerIngredient;