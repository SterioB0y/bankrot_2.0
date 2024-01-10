import React, { useEffect, useState } from 'react';
import "../styles/characteristicsStyle.css"

const Characteristics = ({classname, vison, elements, id, name}) => {

    const [top, setTop] = useState("0px")
    const [left, setLeft] = useState("0px")
    const [arrays, setArrays] = useState([{}])
    
    

    useEffect(()=>{
        const elem = document.getElementById(`${classname}`).getBoundingClientRect();
        setTop(elem.top)
        setLeft(elem.left+290)
        fetch("http://localhost:3001/Debtors/GetFiltersValues")
            .then(response => response.json())
            .then(data => {
                if(elements == "regionsList")
                    setArrays(data.RegionsList)
                else if(elements == "categoriesList")
                    setArrays(data.DebtorsCategoriesList)
                else if(elements == "typesList")
                    setArrays(data.DeclarantsList)
                else if(elements == "proceduresList")
                    setArrays(data.ProceduresList)
            })
            .catch(error => console.error('Error:', error));
    }, [])

    return ( 
        <div className='modal-container' id={elements} style={{top: top, left: left, visibility:vison}}>
            
            {arrays.map((element)=>
                <div className='no-wrap' onClick={()=>{
                    id(element.Value)
                    name(element.Text)
                    document.getElementById(elements).style.visibility = "hidden";
                }
                }>
                    {element.Text}
                </div>
            )}

        </div>
     );
}
 
export default Characteristics;