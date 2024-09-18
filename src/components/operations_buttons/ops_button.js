import React from "react";
import './operations.css';

export function OperationButtons({operation_icon, handleOperator, op_name}){
    return(
        <div>
            <button id="op-btn" type="button" name={op_name} onClick={()=> handleOperator(operation_icon)}>{operation_icon}<span>{op_name}</span></button>
        </div>
    )
}