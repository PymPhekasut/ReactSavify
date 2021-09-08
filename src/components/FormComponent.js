import React, { useState, useEffect } from 'react';
import './FormComponent.css';
import { v4 as uuidv4 } from 'uuid';



const FormComponent = (props)=>{

    //create useState
    //[stateName, functionName] = useState('initial value')
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [formValid, setFormValid] = useState(false);

    const inputTitle = (event) => {
        setTitle(event.target.value); 
        //set value when add something into input field
        //console.log(event.target.value);
    };

    const inpuntAmount = (event) =>{
        setAmount(event.target.value);
        //console.log(event.target.value);
    };

    const saveItem = (event) => {
        event.preventDefault();
        const itemData = {
            id: uuidv4(),
            title:title,
            amount:Number(amount)
        }

        //bottom up or send data to parent
        props.onAddItem(itemData);

        //console.log(itemData);
        //clear value and set to initial value
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !==0
        setFormValid(checkData);
    },[title, amount]);

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label> Transaction List</label>
                    <input type="text" placeholder= "Plese add your transaction" onChange={inputTitle} value={title}/> 
                </div>
                <div className="form-control">
                    <label> Amount</label>
                    <input type="number" placeholder= "(+income, -expense)" onChange={inpuntAmount} value={amount}/>
                </div>
                <div>
                    <button className= "gradient-button gradient-button-1" disabled= {!formValid} type="submit"> Submit </button> 
                </div>
            </form>
        </div>
    )

}

export default FormComponent