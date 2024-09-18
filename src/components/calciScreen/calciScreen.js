import React, { useState, useEffect } from 'react';
import './calciScreen.css'
import { AllOpsBtns } from '../operations_buttons/allOpsButtons';
import { AllNumbers } from '../number_buttons/allNumbers';
import { CalciFunctions } from '../../mathematical_functions/functions';


export function CalciScreen(){
    const { handleClick, handleOperator, handleMain } = CalciFunctions();
    const [display, setDisplay] = useState('');
    const [op, setOp] = useState('');
    
    useEffect(()=>{
        console.log(display)
    },[display]);

    return (
        <div className='centre'>
            <div className='app-title'>
                <p>CalciHere!</p>
            </div>
            <div className='input-Screen'>
                <input type='text' id='text-area' value={display} readOnly/>
            </div>
            <AllOpsBtns handleOperator={(op) => handleOperator(op, setOp, setDisplay)}/>
            <AllNumbers handleClick={(number) => handleClick(number, setDisplay)} handleMain={()=>handleMain(display, setDisplay)}/>
        </div>
    )
}