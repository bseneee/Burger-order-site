import React from 'react'
import css from './MenuItem.module.css'

const MenuItem=props=>{

    return(
        <div>
                <li className={css.MenuItem} >
                    <a className={props.active?css.active:null} href="#">{props.children}</a>
                </li>
        </div>
    );
}
export default MenuItem;