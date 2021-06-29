import React from 'react';
import css from './modal.module.css'
import Shadow from '../Shadow';

const Modal=props=>{
    return (
        <div>
        <Shadow show={props.show} onClick={props.close}/>
            <div   className={css.Modal} style={{transform: props.show?'translateY(0)': 'translateY(-100vh)', opacity:props.show?'1':'0'}}>
                    {props.children}
             </div>
        </div>
    
    );
}
export default Modal;