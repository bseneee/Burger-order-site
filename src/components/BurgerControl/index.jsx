import React from 'react';
import css from './control.module.css'

const BurgerControl=props=>{
    return(
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.orts}</div>
            <button className={css.More} onClick={()=>props.addClick(props.ingredient)}>Нэмэх</button>
            <button disabled={props.disableIngr[props.ingredient]}  className={css.Less}  onClick={()=>props.minusClick(props.ingredient)}>Хасах</button>
        </div>
    );
}
export default BurgerControl;