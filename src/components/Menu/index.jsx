import React from 'react'
import css from './menu.module.css'
import MenuItem from '../MenuItem';

const Menu=props=>{

    return(
        <div>
            <ul className={css.Menu}>
            <MenuItem active link="#">ШИНЭ ЗАХИАЛГА</MenuItem>
            <MenuItem link="#">НЭВТРЭХ</MenuItem>
            </ul>
        </div>
    );
}
export default Menu;