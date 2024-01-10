import React, { useState } from 'react';
import "../styles/debtorsTableStyle.css";

const DebtorsTable = ({countDeb, debtorsList, sortBy}) => {

   const [howSort, setHowSort] = useState("DESC")
   const [whatSort, setWhatSort] = useState("DateStart")

   function convertToNormalDate(date){
      if(date !== null){
      const tempDate = new Date(parseInt(date.match(/\d+/)[0], 10))
      let day
      let month
      if(tempDate.getDate() >= 1 && tempDate.getDate() < 10){
         day = "0"+tempDate.getDate()
      }
      else{
         day = tempDate.getDate()
      }
      if(tempDate.getMonth()+1 >= 1 && tempDate.getMonth()+1 < 10){
         month = "0"+(tempDate.getMonth()+1)
      }
      else{
         month = tempDate.getMonth()+1
      }
      return `${day}.${month}.${tempDate.getFullYear()}`
   }
   else{
      return ""
   }
   }

   function sorted(whtsort){
      if(whtsort !== whatSort){
         setWhatSort(whtsort)
         const update = {
            SortBy: whtsort,
            SortOrder: "DESC"
         }
         sortBy(update)
      }
      else{
         if(howSort === "ASC"){
            setHowSort("DESC")
            const update = {
            SortBy: whtsort,
            SortOrder: "DESC"
            }
         sortBy(update)
         }
         else{
         setHowSort("ASC")
         const update = {
            SortBy: whtsort,
            SortOrder: "ASC"
         }
         sortBy(update)
      }
      }
   }

    return ( 
        <table>
             <thead>
                <tr>
                    <th onClick={()=>sorted("DateStart")}>Дата</th>
                    <th className='indentation' onClick={()=>sorted("FullName")}>Должник</th>
                    <th onClick={()=>sorted("ProcessName")}>Процедура</th>
                    <th onClick={()=>sorted("LegalRegionName")}>Регион</th>
                    <th onClick={()=>sorted("ManagerTitle")}>Управляющий</th>
                    <th onClick={()=>sorted("StateOwnership")}>Доля государственной собственности, %</th>
                </tr>
             </thead>
             <tbody>
                {countDeb == 0 ? <h1>Результатов нет</h1> : debtorsList.map(debtor=>(
                  <tr>
                     <td>{convertToNormalDate(debtor.DateStart)}</td>
                     <td>{debtor.FullName}</td>
                     <td>{debtor.ProcessName}</td>
                     <td>{debtor.LegalRegionName}</td>
                     <td>{debtor.ManagerTitle}</td>
                     <td>{debtor.StateOwnership}</td>
                  </tr>
                ))}
             </tbody>
        </table>
     );
}
 
export default DebtorsTable;