import React from 'react'
import logoImage from '../../assets/images/burger-logo.png'
import css from './Logo.module.css'

const Logo=props=>{
    return(
        <div className={css.Logo}>
            <img src={logoImage}></img>
        </div>
    );
}
export default Logo;