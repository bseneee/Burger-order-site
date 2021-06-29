import React from 'react';
import css from './controls.module.css'
import BurgerControl from '../BurgerControl';

const BurgerControls=props=>{
    return(
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: <strong>{props.totalPrice}</strong> </p>
            <div>
            {
                Object.keys(props.ingName).map(e=>{
                    return(
                            <BurgerControl 
                                key={e}
                                disableIngr={props.disableIngr}
                                addClick={props.addClick} 
                                minusClick={props.minusClick} 
                                ingredient={e} 
                                orts={props.ingName[e]}    />
                    );
                })
            }
            </div>
            <button className={css.OrderButton} disabled={props.totalPrice<=0}
                    onClick={props.showModal}    
            >Захиалах</button>
                        
        </div>
    );
}
export default BurgerControls;