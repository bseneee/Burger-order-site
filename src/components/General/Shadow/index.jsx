import React from 'react'
import css from './shadow.module.css'
const Shadow=props=>{
    return (props.show ? <div onClick={props.onClick} className={css.Shadow}></div>:null);
};

export default Shadow;