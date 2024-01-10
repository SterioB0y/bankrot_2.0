import React from 'react';
import arrow from "../assets/rightArrow.png"
import "../styles/dropDownListStyle.css"

const DropDownList = ({children, ...props}) => {
    return ( 
        <div {...props} className='drop-down-list'>
            <div>
                {children}
            </div>
            <img className='arrow' src={arrow}/>
        </div>
     );
}
 
export default DropDownList;