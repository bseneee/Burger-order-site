import React from 'react'
import css from './HanBurger.module.css'

const HanBurgerMenu=props=>{
    return(
        <div onClick={props.toggleSideBar} className={css.HanBurgerMenu}>
            <div>-</div>
            <div>-</div>
            <div>-</div>
        </div>
    );
}
export default HanBurgerMenu;