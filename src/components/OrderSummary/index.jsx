import React from 'react'
import Button from '../General/Button'

const OrderSummary=props=>{  
    
    return (
        <div>
            <h3>Таний захиалга:</h3>
            <p>Таний сонгосон орцууд:</p>
            {
                <ul >
                   {Object.keys(props.ingredients).map(key=><li key={key}>{props.ingName[key]} : {props.ingredients[key]}</li>)}
                </ul>
            }
            <p><strong>Захиалгын дүн: {props.totalPrice}</strong></p>
            <a>Цаашаа үргэлжлүүлэх үү?</a><br></br>
            < Button text="ТАТГАЛЗАХ" btnType="Danger" clicked={props.onCancel}/>
            < Button text="ҮРГЭЛЖЛҮҮЛЭХ" btnType="Success" clicked={props.onContinue}/>
        </div>
    );
}
export default OrderSummary;