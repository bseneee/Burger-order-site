import React from 'react'
import css from './toolbar.module.css'
import Logo from '../Logo/index'
import Menu from '../Menu';
import HanBurgerMenu from '../HanBurgerMenu';

const Toolbar=props=>{

    return(
                <header className={css.toolbar}>
                    <HanBurgerMenu toggleSideBar={props.toggleSideBar}/>
                    <Logo/>
                    <nav className={css.HideMobile}>
                        <Menu />
                    </nav>
                </header>
    );
    
};

export default Toolbar;