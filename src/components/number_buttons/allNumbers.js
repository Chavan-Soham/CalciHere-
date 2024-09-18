import React from "react";
import { Numbers } from "./numbers";
import './numbers.css';



export function AllNumbers({handleClick, handleMain}){
    
    return ( 
        <div className="nos-equals">
            <div className="all-numbers">
            <div className="three">
                <Numbers number="1" handleClick={handleClick}/>
                <Numbers number="2" handleClick={handleClick} />
                <Numbers number="3" handleClick={handleClick}/>
            </div>
            
            <div className="three">
                <Numbers number="4" handleClick={handleClick}/>
                <Numbers number="5" handleClick={handleClick}/>
                <Numbers number="6" handleClick={handleClick}/>
            </div>
            <div className="three">
                <Numbers number="7" handleClick={handleClick}/>
                <Numbers number="8" handleClick={handleClick}/>
                <Numbers number="9" handleClick={handleClick}/>
            </div>
            <div className="three">
                <Numbers number="0" handleClick={handleClick}/>
                <Numbers number="00" handleClick={handleClick}/>
                <Numbers number="R" handleClick={handleClick}/>
            </div>
        </div>
        <div className="equals">
            <button className="equal-btn" onClick={()=> handleMain()}>=</button>
        </div>
        </div>
    )
}