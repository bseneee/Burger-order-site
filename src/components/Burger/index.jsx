import React from 'react';
import BurgerIngredient from '../BurgerIngredient';
import css from './Burger.module.css'

export const Burger=(props)=>{ 
    
    let content=[];
    const items=Object.entries(props.ingredients);

    items.map((e,i)=>{
        for(let i=0;i<e[1];i++)
           content.push(<BurgerIngredient key={i} type={e[0]}/>);
    });
        
    if(content.length===0)
             content=<p>Хачиртай талхны орцыг сонгоно уу ...</p>;
  
    return(
        <div className={css.Burger}>
            <BurgerIngredient key="bread-top"  type="bread-top"/>
            {content}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );    
}
