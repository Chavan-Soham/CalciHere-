import React from "react";
import { OperationButtons } from "./ops_button";
import './operations.css';

export function AllOpsBtns({handleOperator}){
    return(
        <div className="operations">
            <OperationButtons operation_icon="+" op_name="plus" handleOperator={handleOperator}/>
            <OperationButtons operation_icon="-" op_name="minus" handleOperator={handleOperator}/> 
            <OperationButtons operation_icon="*" op_name="multiply" handleOperator={handleOperator}/>
            <OperationButtons operation_icon="/" op_name="divide" handleOperator={handleOperator}/>
            <OperationButtons operation_icon="%" op_name="modulus" handleOperator={handleOperator}/>
        </div>
    )
}