import React from 'react'
import Logo from '../Logo';
import Menu from '../Menu';
import css from './SideBar.module.css'
import Shadow from '../General/Shadow';

const SideBar=props=>{


    let classes=[css.SideBar,css.Close];
    if(props.showSideBar){
        classes=[css.SideBar,css.Open];
    }
    return(
        <div>
                <Shadow show={props.showSideBar} onClick={props.toggleSideBar}/>
                <div className={classes.join(" ")} onClick={props.toggleSideBar}>
                    <div className={css.Logo}>
                        <Logo/>
                        <Menu/>
                    </div>
                </div>
        </div>
        
    );
}
export default SideBar;